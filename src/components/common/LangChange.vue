<template>
    <div>
        <span>Display Language</span>
        <el-select v-model="$i18n.locale">
            <el-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</el-option>
        </el-select>
    </div>
</template>