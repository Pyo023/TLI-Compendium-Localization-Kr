/**
 * Build Planner English translations
 * Source of truth - all other languages translate from this file
 */
import type { BuildPlannerTranslations } from '../types'

export const buildplannerEn: BuildPlannerTranslations = {
  page: {
    backButton: 'HOME',
    preAlpha: 'PRE-ALPHA',
    buildName: 'Build Name:',
    buildNamePlaceholder: 'Enter build name'
  },
  hero: {
    sectionTitle: 'HERO',
    selectHero: 'Click to select hero',
    clickToSelect: 'Click to select',
    selectHeroToView: 'Select a hero to view and choose traits',
    traitLevel: 'Level {level}'
  },
  talentTree: {
    sectionTitle: 'TALENT TREE',
    godTree: 'GOD TREE',
    clickToSelect: 'Click to select',
    classTree: 'CLASS TREE',
    selectPreviousFirst: 'Select previous first',
    treeNumber: 'TREE {number}',
    selectPrevious: 'Select previous',
    noTreeSelected: 'No Tree Selected',
    selectGodTree: 'Select a God Tree from the sidebar to begin building your talent tree'
  },
  skills: {
    sectionTitle: 'SKILLS',
    activeSkills: 'Active Skills',
    passiveSkills: 'Passive Skills',
    energy: 'Energy',
    maxEnergy: 'max'
  },
  gear: {
    sectionTitle: 'GEAR'
  },
  pactspirits: {
    sectionTitle: 'PACTSPIRITS'
  },
  buildActions: {
    saveBuild: 'Save Build',
    builds: 'Builds',
    newBuild: '+ New Build',
    noSavedBuilds: 'No saved builds',
    saveExport: 'Save/Export',
    exportJson: 'Export as JSON',
    importJson: 'Import from JSON',
    copyShareUrl: 'Copy Share URL',
    resetBuild: 'Reset Build',
    resetConfirm: 'Reset current build? All unsaved changes will be lost.'
  },
  toasts: {
    buildSaved: 'Build saved successfully',
    newBuildCreated: 'New build created',
    buildLoaded: 'Build loaded',
    buildDeleted: 'Build deleted',
    buildReset: 'Build reset',
    importSuccess: 'Build imported successfully!',
    exportSuccess: 'Build exported',
    shareUrlCopied: 'Share URL copied to clipboard'
  },
  importModal: {
    title: 'Import Build',
    pasteJson: 'Paste JSON',
    uploadFile: 'Upload File',
    dragDrop: 'Drag & drop a .json file here',
    clickToSelect: 'click to select',
    selected: 'Selected:',
    cancel: 'Cancel',
    import: 'Import'
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    languageHint: 'Only English and Chinese are available. More languages coming soon.',
    done: 'Done'
  }
}
