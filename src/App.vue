<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
        <v-btn prepend-icon="mdi-invert-colors">
          切換風格
          <v-menu activator="parent">
            <v-list>
              <v-list-item v-for="(index, i) in colorMenu" :key="i" link>
                <v-list-item-title @click="changeListTheme(i)">{{ index }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!--
      slot = 插槽 = 自訂元件內的某部分 HTML
      v-slot="元件插槽提供的可用變數"
      Component = 目前路由應該顯示的元件
      -->

      <router-view v-slot="{ Component }">
        <!--
        keep-alive 包住的元件不會被銷毀
        include 指定保留的元件
        component = 動態元件
        is = 要使用的元件
        -->
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const theme = useTheme()
const themeStore = useThemeStore()
const { currentTheme, getmyThemes } = storeToRefs(themeStore)
const { setTheme } = themeStore
const colorMenu = ['深色', '亮色', '淺色', '紫色', '紅色']

let id = 0

onMounted(() => {
  id = getmyThemes.value.indexOf(currentTheme.value)
  theme.global.name.value = currentTheme.value
})

const changeListTheme = (i) => {
  id = i
  setTheme(id)
  theme.global.name.value = currentTheme.value
}
</script>
