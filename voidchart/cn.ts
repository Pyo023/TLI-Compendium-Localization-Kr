/**
 * VoidChart Chinese (Simplified) translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { VoidChartTranslations } from '../types'

export const voidchartCn: VoidChartTranslations = {
  page: {
    backButton: '主页',
    loading: '加载天赋树数据...'
  },
  pointsCounter: {
    points: '点数',
    profound: '深邃',
    profoundTooltip: '深邃（主节点）'
  },
  skillTree: {
    noData: '该天赋树暂无数据。',
    runScraper: '运行数据抓取工具以生成天赋树数据。',
    searchPlaceholder: '搜索节点...',
    reset: '重置',
    resetCurrent: '重置当前天赋树',
    resetAll: '重置所有天赋树',
    resetAllTitle: '重置所有天赋树',
    resetAllConfirm: '确定要重置所有天赋树吗？此操作无法撤销。',
    cancel: '取消',
    resetAllButton: '全部重置',
    toastSwitched: '已切换至 {patchName}',
    toastReset: '{treeName} 已重置',
    toastResetAll: '所有天赋树已重置'
  },
  strategy: {
    tabLabel: '策略',
    title: '策略',
    timemark: '时刻',
    area: '区域',
    equipment: '装备',
    selectScalpel: '选择手术刀',
    selectProbe: '选择探针',
    compassNumber: '罗盘 {number}',
    combinedEffects: '组合效果',
    effectTypes: {
      probe: '探针',
      compass: '罗盘',
      scalpel: '手术刀'
    },
    dialogTitles: {
      probe: '选择探针',
      scalpel: '选择赛季罗盘',
      compass: '选择罗盘'
    },
    areas: {
      glacialAbyss: '冰川深渊',
      blisteringLavaSea: '炽热熔岩海',
      steelForge: '钢铁熔炉',
      thunderWastes: '雷霆荒原',
      voidlands: '虚空之地'
    },
    timemarks: {
      profound: '深邃',
      deepSpace: '深空'
    }
  },
  treeNames: {
    commodities: '商品',
    gear: '装备',
    legendarygear: '传奇装备',
    compass: '罗盘',
    beacons: '信标',
    darksurge: '黑暗涌动',
    blacksail: '黑帆',
    cube: '魔方',
    aeterna: '永恒',
    nightmare: '梦魇',
    clockworkballet: '发条芭蕾',
    folklore: '民俗',
    thefrozencanvas: '冰封画布',
    arcana: '奥秘',
    sandlord: '沙 lord',
    outlaw: ' outlaw',
    overrealm: 'Overrealm',
    godofwar: '战神',
    godofhunting: '狩猎之神',
    godofmight: '力量之神',
    godofmachine: '机械之神',
    cage: '牢笼',
    profound: '深邃'
  },
  stats: {
    tabLabel: '统计',
    title: '统计',
    empty: '暂无已分配属性',
    nodeCount: '（{count} 个节点）',
    timemarkOrAbove: '时刻 {timemark} 或更高：'
  },
  buildActions: {
    tooltips: {
      save: '保存',
      load: '加载',
      import: '导入',
      export: '导出',
      share: '分享',
      delete: '删除'
    },
    noSavedBuilds: '暂无已保存的构建',
    saveModal: {
      title: '保存构建',
      warning: '此操作仅将数据保存到浏览器的本地存储中。使用{export}功能可创建可移植文件。',
      warningBold: '导出',
      buildName: '构建名称',
      placeholder: '输入构建名称...',
      errorNoName: '请输入构建名称',
      errorSaveFailed: '保存构建失败。存储空间可能已满。',
      cancel: '取消',
      save: '保存'
    },
    exportModal: {
      title: '导出构建',
      description: '输入构建导出文件的文件名：',
      placeholder: '我的构建',
      extension: '.txt',
      download: '下载'
    },
    importModal: {
      title: '导入构建',
      tabPaste: '粘贴代码',
      tabUpload: '上传文件',
      placeholder: '在此粘贴你的构建代码...',
      dropText: '将 .txt 文件拖放到此处',
      dropLink: '点击选择',
      selected: '已选择：',
      errors: {
        noCode: '请输入构建代码',
        noFile: '请先选择文件',
        invalidCode: '无效的构建代码',
        patchUnavailable: '构建需要版本 {patch}，该版本不可用',
        applyFailed: '应用构建失败',
        wrongFileType: '请选择 .txt 文件',
        readFailed: '读取文件失败'
      }
    },
    shareModal: {
      title: '分享构建',
      description: '复制此链接以分享你的构建：',
      close: '关闭',
      copyUrl: '复制链接'
    },
    toasts: {
      importSuccess: '构建导入成功！',
      loadSuccess: '构建"{name}"已加载！',
      deleteSuccess: '构建"{name}"已删除',
      loadFailed: '加载构建失败',
      deleteFailed: '删除构建失败',
      saveSuccess: '构建"{name}"已保存！',
      exportSuccess: '构建导出成功！',
      shareSuccess: '分享链接已复制到剪贴板！'
    }
  },
  itemDialog: {
    searchPlaceholder: '搜索...',
    clearSelection: '清除选择',
    alreadySelected: '已选择',
    noItems: '未找到物品'
  }
}
