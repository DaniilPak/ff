import express from 'express'
import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import os from 'os'

const app = express()
const PORT = 3000

const allowed = Array.from({ length: 10 }, (_, i) => `rc${i + 1}`)

app.get('/source', (req, res) => {
  const rc = req.query.rc
  if (!allowed.includes(rc)) {
    return res.status(400).send('❌ Invalid RC version')
  }

  const tempDir = path.join(os.tmpdir(), `vue-source-${rc}-${Date.now()}`)
  try {
    execSync(`git clone --branch ${rc} --depth 1 . ${tempDir}`)
    const zipPath = path.join(tempDir, '..', `${rc}.tar.gz`)
    execSync(`tar -czf ${zipPath} -C ${tempDir} .`)
    res.download(zipPath, `${rc}.tar.gz`, () => {
      fs.rmSync(tempDir, { recursive: true, force: true })
      fs.unlinkSync(zipPath)
    })
  } catch (err) {
    res.status(500).send('🔥 Failed to fetch source code')
  }
})

app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`)
})
