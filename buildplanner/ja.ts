/**
 * Build Planner Japanese translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { BuildPlannerTranslations } from '../types'

export const buildplannerJa: BuildPlannerTranslations = {
  page: {
    backButton: 'ホーム',
    preAlpha: 'プレアルファ',
    buildName: 'ビルド名：',
    buildNamePlaceholder: 'ビルド名を入力'
  },
  hero: {
    sectionTitle: 'ヒーロー',
    selectHero: 'ヒーローを選択',
    clickToSelect: 'クリックして選択',
    selectHeroToView: '特性を表示して選択するにはヒーローを選択してください',
    traitLevel: 'レベル {level}'
  },
  talentTree: {
    sectionTitle: 'タレントツリー',
    godTree: 'ゴッドツリー',
    clickToSelect: 'クリックして選択',
    classTree: 'クラスツリー',
    selectPreviousFirst: 'まず前のツリーを選択してください',
    treeNumber: 'ツリー {number}',
    selectPrevious: '前を選択',
    noTreeSelected: 'ツリーが選択されていません',
    selectGodTree: 'タレントツリーの構築を開始するには、サイドバーからゴッドツリーを選択してください'
  },
  skills: {
    sectionTitle: 'スキル',
    activeSkills: 'アクティブスキル',
    passiveSkills: 'パッシブスキル',
    energy: 'エネルギー',
    maxEnergy: '最大'
  },
  gear: {
    sectionTitle: '装備'
  },
  pactspirits: {
    sectionTitle: 'パクトスピリット'
  },
  buildActions: {
    saveBuild: 'ビルドを保存',
    builds: 'ビルドリスト',
    newBuild: '+ 新規ビルド',
    noSavedBuilds: '保存されたビルドがありません',
    saveExport: '保存/エクスポート',
    exportJson: 'JSONとしてエクスポート',
    importJson: 'JSONからインポート',
    copyShareUrl: '共有URLをコピー',
    resetBuild: 'ビルドをリセット',
    resetConfirm: '現在のビルドをリセットしますか？保存されていない変更はすべて失われます。'
  },
  toasts: {
    buildSaved: 'ビルドを保存しました',
    newBuildCreated: '新規ビルドを作成しました',
    buildLoaded: 'ビルドを読み込みました',
    buildDeleted: 'ビルドを削除しました',
    buildReset: 'ビルドをリセットしました',
    importSuccess: 'ビルドを正常にインポートしました！',
    exportSuccess: 'ビルドをエクスポートしました',
    shareUrlCopied: '共有URLをクリップボードにコピーしました'
  },
  importModal: {
    title: 'ビルドをインポート',
    pasteJson: 'JSONを貼り付け',
    uploadFile: 'ファイルをアップロード',
    dragDrop: '.jsonファイルをここにドラッグ＆ドロップ',
    clickToSelect: 'クリックして選択',
    selected: '選択済み：',
    cancel: 'キャンセル',
    import: 'インポート'
  },
  settings: {
    title: '設定',
    language: '言語',
    languageHint: '現在、英語と中国語のみご利用いただけます。他の言語も順次追加予定です。',
    done: '完了'
  }
}
