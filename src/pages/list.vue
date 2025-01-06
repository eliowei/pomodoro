<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">新增事項</h1>
        <v-text-field
          ref="inputTextField"
          v-model="input"
          append-icon="mdi-plus"
          label="新增事項"
          clearable
          :rules="[rules.required, rules.length]"
          @keydown.enter="onInputSubmit"
          @click:append="onInputSubmit"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">未完成</h1>
        <v-text-field v-model="search" label="過濾未完成事項"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in filteredItems" :key="item.id">
              <td>
                <v-text-field
                  v-show="item.edit"
                  ref="editTextField"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  @keydown.enter="onEditSubmit(item.id, i)"
                ></v-text-field>
                <span v-show="!item.edit">{{ item.text }}</span>
              </td>
              <td>
                <template v-if="item.edit">
                  <v-btn icon="mdi-check" @click="onEditSubmit(item.id, i)"></v-btn>
                  <v-btn icon="mdi-undo" @click="cancelEditItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn icon="mdi-pencil" @click="editItem(item.id)"></v-btn>
                  <v-btn icon="mdi-delete" @click="delItem(item.id)"></v-btn>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">已完成</h1>
        <v-text-field v-model="searchFinished" label="過濾已完成事項"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>事項</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="finishedItems.length === 0">
              <td coolspan="2">沒有項目</td>
            </tr>

            <tr v-for="item in filteredFinishedItems" :key="item.id">
              <td>{{ item.text }}</td>
              <td>
                <v-btn icon="mdi-delete" @click="delFinishedItem(item.id)"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/stores/list'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const list = useListStore()
const { addItem, editItem, delItem, cancelEditItem, confirmEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const input = ref('')
const inputTextField = ref(null)
const editTextField = ref([])
const search = ref('')
const searchFinished = ref('')

const rules = {
  required: (value) => {
    return Boolean(value) || '欄位必填'
  },
  length: (value) => {
    return value.length >= 3 || '必須三個字以上'
  },
}
const onInputSubmit = () => {
  console.log(inputTextField.value.isValid)
  if (!inputTextField.value.isValid) return
  addItem(input.value)
  inputTextField.value.reset()
  console.log(typeof items)
}

const onEditSubmit = (id, i) => {
  if (!editTextField.value[i].isValid) return
  confirmEditItem(id)
}

const filteredItems = computed(() => {
  return Object.values(items.value).filter((item) => {
    return item.text.includes(search.value)
  })
})

const filteredFinishedItems = computed(() => {
  return Object.values(finishedItems.value).filter((item) => {
    return item.text.includes(searchFinished.value)
  })
})
</script>

<route lang="yaml">
meta:
  title: 清單
</route>
