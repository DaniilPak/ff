import express from 'express'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000
const DIST_ROOT = path.join(__dirname, 'dist')
const allowed = Array.from({ length: 10 }, (_, i) => `rc${i + 1}`)

app.get('/source', (req, res) => {
  const rc = req.query.source
  if (!allowed.includes(rc)) return res.status(400).send('❌ Invalid RC')

  console.log(rc)

  const buildPath = path.join(DIST_ROOT, rc)
  if (!fs.existsSync(buildPath)) return res.status(404).send('😢 Build not found')

  console.log('buildPath', buildPath)

  const files = listAllFiles(buildPath)
  console.log('All files:', files)

  const baseUrl = `${req.protocol}://${req.get('host')}`
  const fileLinks = files.map((file) => ({
    name: path.relative(buildPath, file),
    url: `${baseUrl}/${rc}/${path.relative(buildPath, file).replace(/\\/g, '/')}`,
  }))

  res.json(fileLinks)
})

app.use('/:rc', (req, res, next) => {
  const rc = req.params.rc
  if (!allowed.includes(rc)) return res.status(400).send('❌ Invalid RC folder')

  const staticPath = path.join(DIST_ROOT, rc)
  express.static(staticPath)(req, res, next)
})

app.listen(PORT, () => {
  console.log(`🧃 Ready at http://localhost:${PORT}?source=rc1`)
})

function listAllFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    return entry.isDirectory() ? listAllFiles(fullPath) : fullPath
  })
}
