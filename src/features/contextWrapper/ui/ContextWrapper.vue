<template>
  <a-dropdown :trigger="['contextmenu']">
    <div>
      <slot></slot>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item key="1">1st menu item</a-menu-item>
        <a-menu-item key="2">2nd menu item</a-menu-item>
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
