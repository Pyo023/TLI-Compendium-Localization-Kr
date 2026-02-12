/**
 * VoidChart Japanese translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { VoidChartTranslations } from '../types'

export const voidchartJa: VoidChartTranslations = {
  page: {
    backButton: 'ホーム',
    loading: 'ツリーデータを読み込み中...'
  },
  pointsCounter: {
    points: 'ポイント',
    profound: '深淵',
    profoundTooltip: '深淵（メジャーノード）'
  },
  skillTree: {
    noData: 'このツリーにはデータが読み込まれていません。',
    runScraper: 'ツリーデータを生成するにはスクレイパーを実行してください。',
    searchPlaceholder: 'ノードを検索...',
    reset: 'リセット',
    resetCurrent: '現在のツリーをリセット',
    resetAll: 'すべてのツリーをリセット',
    resetAllTitle: 'すべてのツリーをリセット',
    resetAllConfirm: 'すべてのツリーをリセットしてもよろしいですか？この操作は元に戻せません。',
    cancel: 'キャンセル',
    resetAllButton: 'すべてリセット',
    toastSwitched: '{patchName}に切り替えました',
    toastReset: '{treeName}をリセットしました',
    toastResetAll: 'すべてのツリーをリセットしました'
  },
  strategy: {
    tabLabel: '戦略',
    title: '戦略',
    timemark: 'タイムマーク',
    area: 'エリア',
    equipment: '装備',
    selectScalpel: 'メスを選択',
    selectProbe: 'プローブを選択',
    compassNumber: 'コンパス {number}',
    combinedEffects: '組み合わせ効果',
    effectTypes: {
      probe: 'プローブ',
      compass: 'コンパス',
      scalpel: 'メス'
    },
    dialogTitles: {
      probe: 'プローブを選択',
      scalpel: 'シーズンコンパスを選択',
      compass: 'コンパスを選択'
    },
    areas: {
      glacialAbyss: '氷河の深淵',
      blisteringLavaSea: '灼熱の溶岩海',
      steelForge: '鋼の鍛冶場',
      thunderWastes: '雷の荒野',
      voidlands: '虚空の地'
    },
    timemarks: {
      profound: '深淵',
      deepSpace: 'ディープスペース'
    }
  },
  treeNames: {
    commodities: '商品',
    gear: '装備',
    legendarygear: '伝説の装備',
    compass: 'コンパス',
    beacons: 'ビーコン',
    darksurge: 'ダークサージ',
    blacksail: 'ブラックセイル',
    cube: 'キューブ',
    aeterna: 'エターナ',
    nightmare: 'ナイトメア',
    clockworkballet: 'クロックワークバレエ',
    folklore: 'フォークロア',
    thefrozencanvas: '凍てついたキャンバス',
    arcana: 'アルカナ',
    sandlord: 'サンドロード',
    outlaw: '無法者',
    overrealm: 'オーバーレルム',
    godofwar: '戦争の神',
    godofhunting: '狩猟の神',
    godofmight: '力の神',
    godofmachine: '機械の神',
    cage: '檻',
    profound: '深淵'
  },
  stats: {
    tabLabel: '統計',
    title: '統計',
    empty: '割り当てられたステータスがありません',
    nodeCount: '（{count} ノード）',
    timemarkOrAbove: 'タイムマーク {timemark} 以上：'
  },
  buildActions: {
    tooltips: {
      save: '保存',
      load: '読み込み',
      import: 'インポート',
      export: 'エクスポート',
      share: '共有',
      delete: '削除'
    },
    noSavedBuilds: '保存されたビルドがありません',
    saveModal: {
      title: 'ビルドを保存',
      warning: 'この操作はブラウザのローカルストレージにのみ保存されます。ポータブルファイルを作成するには{export}機能を使用してください。',
      warningBold: 'エクスポート',
      buildName: 'ビルド名',
      placeholder: 'ビルド名を入力...',
      errorNoName: 'ビルド名を入力してください',
      errorSaveFailed: 'ビルドの保存に失敗しました。ストレージが一杯かもしれません。',
      cancel: 'キャンセル',
      save: '保存'
    },
    exportModal: {
      title: 'ビルドをエクスポート',
      description: 'ビルドエクスポートファイルのファイル名を入力してください：',
      placeholder: 'マイビルド',
      extension: '.txt',
      download: 'ダウンロード'
    },
    importModal: {
      title: 'ビルドをインポート',
      tabPaste: 'コードを貼り付け',
      tabUpload: 'ファイルをアップロード',
      placeholder: 'ここにビルドコードを貼り付けてください...',
      dropText: '.txtファイルをここにドラッグ＆ドロップ',
      dropLink: 'クリックして選択',
      selected: '選択済み：',
      errors: {
        noCode: 'ビルドコードを入力してください',
        noFile: 'まずファイルを選択してください',
        invalidCode: '無効なビルドコード',
        patchUnavailable: 'ビルドに{patch}パッチが必要ですが、利用できません',
        applyFailed: 'ビルドの適用に失敗しました',
        wrongFileType: '.txtファイルを選択してください',
        readFailed: 'ファイルの読み込みに失敗しました'
      }
    },
    shareModal: {
      title: 'ビルドを共有',
      description: 'ビルドを共有するにはこのURLをコピーしてください：',
      close: '閉じる',
      copyUrl: 'URLをコピー'
    },
    toasts: {
      importSuccess: 'ビルドを正常にインポートしました！',
      loadSuccess: 'ビルド「{name}」を読み込みました！',
      deleteSuccess: 'ビルド「{name}」を削除しました',
      loadFailed: 'ビルドの読み込みに失敗しました',
      deleteFailed: 'ビルドの削除に失敗しました',
      saveSuccess: 'ビルド「{name}」を保存しました！',
      exportSuccess: 'ビルドを正常にエクスポートしました！',
      shareSuccess: '共有URLをクリップボードにコピーしました！'
    }
  },
  itemDialog: {
    searchPlaceholder: '検索...',
    clearSelection: '選択を解除',
    alreadySelected: '既に選択済み',
    noItems: 'アイテムが見つかりません'
  }
}
