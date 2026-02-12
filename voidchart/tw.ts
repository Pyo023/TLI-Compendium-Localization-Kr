/**
 * VoidChart Taiwanese (Traditional Chinese) translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { VoidChartTranslations } from '../types'

export const voidchartTw: VoidChartTranslations = {
  page: {
    backButton: '主頁',
    loading: '載入天賦樹資料...'
  },
  pointsCounter: {
    points: '點數',
    profound: '深邃',
    profoundTooltip: '深邃（主節點）'
  },
  skillTree: {
    noData: '該天賦樹暫無資料。',
    runScraper: '執行資料抓取工具以產生天賦樹資料。',
    searchPlaceholder: '搜尋節點...',
    reset: '重置',
    resetCurrent: '重置當前天賦樹',
    resetAll: '重置所有天賦樹',
    resetAllTitle: '重置所有天賦樹',
    resetAllConfirm: '確定要重置所有天賦樹嗎？此操作無法復原。',
    cancel: '取消',
    resetAllButton: '全部重置',
    toastSwitched: '已切換至 {patchName}',
    toastReset: '{treeName} 已重置',
    toastResetAll: '所有天賦樹已重置'
  },
  strategy: {
    tabLabel: '策略',
    title: '策略',
    timemark: '時刻',
    area: '區域',
    equipment: '裝備',
    selectScalpel: '選擇手術刀',
    selectProbe: '選擇探針',
    compassNumber: '羅盤 {number}',
    combinedEffects: '組合效果',
    effectTypes: {
      probe: '探針',
      compass: '羅盤',
      scalpel: '手術刀'
    },
    dialogTitles: {
      probe: '選擇探針',
      scalpel: '選擇賽季羅盤',
      compass: '選擇羅盤'
    },
    areas: {
      glacialAbyss: '冰川深淵',
      blisteringLavaSea: '熾熱熔岩海',
      steelForge: '鋼鐵熔爐',
      thunderWastes: '雷霆荒原',
      voidlands: '虛空之地'
    },
    timemarks: {
      profound: '深邃',
      deepSpace: '深空'
    }
  },
  treeNames: {
    commodities: '商品',
    gear: '裝備',
    legendarygear: '傳奇裝備',
    compass: '羅盤',
    beacons: '信標',
    darksurge: '黑暗湧動',
    blacksail: '黑帆',
    cube: '魔方',
    aeterna: '永恆',
    nightmare: '夢魘',
    clockworkballet: '發條芭蕾',
    folklore: '民俗',
    thefrozencanvas: '冰封畫布',
    arcana: '奧秘',
    sandlord: '沙 lord',
    outlaw: ' outlaw',
    overrealm: 'Overrealm',
    godofwar: '戰神',
    godofhunting: '狩獵之神',
    godofmight: '力量之神',
    godofmachine: '機械之神',
    cage: '牢籠',
    profound: '深邃'
  },
  stats: {
    tabLabel: '統計',
    title: '統計',
    empty: '暫無已分配屬性',
    nodeCount: '（{count} 個節點）',
    timemarkOrAbove: '時刻 {timemark} 或更高：'
  },
  buildActions: {
    tooltips: {
      save: '儲存',
      load: '載入',
      import: '導入',
      export: '導出',
      share: '分享',
      delete: '刪除'
    },
    noSavedBuilds: '暫無已儲存的構建',
    saveModal: {
      title: '儲存構建',
      warning: '此操作僅將資料儲存到瀏覽器的本地儲存中。使用{export}功能可建立可移植檔案。',
      warningBold: '導出',
      buildName: '構建名稱',
      placeholder: '輸入構建名稱...',
      errorNoName: '請輸入構建名稱',
      errorSaveFailed: '儲存構建失敗。儲存空間可能已滿。',
      cancel: '取消',
      save: '儲存'
    },
    exportModal: {
      title: '導出構建',
      description: '輸入構建導出檔案的檔名：',
      placeholder: '我的構建',
      extension: '.txt',
      download: '下載'
    },
    importModal: {
      title: '導入構建',
      tabPaste: '貼上代碼',
      tabUpload: '上傳檔案',
      placeholder: '在此貼上你的構建代碼...',
      dropText: '將 .txt 檔案拖放到此處',
      dropLink: '點擊選擇',
      selected: '已選擇：',
      errors: {
        noCode: '請輸入構建代碼',
        noFile: '請先選擇檔案',
        invalidCode: '無效的構建代碼',
        patchUnavailable: '構建需要版本 {patch}，該版本不可用',
        applyFailed: '應用構建失敗',
        wrongFileType: '請選擇 .txt 檔案',
        readFailed: '讀取檔案失敗'
      }
    },
    shareModal: {
      title: '分享構建',
      description: '複製此連結以分享你的構建：',
      close: '關閉',
      copyUrl: '複製連結'
    },
    toasts: {
      importSuccess: '構建導入成功！',
      loadSuccess: '構建「{name}」已載入！',
      deleteSuccess: '構建「{name}」已刪除',
      loadFailed: '載入構建失敗',
      deleteFailed: '刪除構建失敗',
      saveSuccess: '構建「{name}」已儲存！',
      exportSuccess: '構建導出成功！',
      shareSuccess: '分享連結已複製到剪貼簿！'
    }
  },
  itemDialog: {
    searchPlaceholder: '搜尋...',
    clearSelection: '清除選擇',
    alreadySelected: '已選擇',
    noItems: '未找到物品'
  }
}
