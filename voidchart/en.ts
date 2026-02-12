/**
 * VoidChart English translations
 * Source of truth - all other languages translate from this file
 */
import type { VoidChartTranslations } from '../types'

export const voidchartEn: VoidChartTranslations = {
  page: {
    backButton: 'home',
    loading: 'Loading tree data...'
  },
  pointsCounter: {
    points: 'Points',
    profound: 'Profound',
    profoundTooltip: 'Profound (Major Node)'
  },
  skillTree: {
    noData: 'No data loaded for this tree.',
    runScraper: 'Run the scraper to generate tree data.',
    searchPlaceholder: 'Search nodes...',
    reset: 'Reset',
    resetCurrent: 'Reset Current Tree',
    resetAll: 'Reset All Trees',
    resetAllTitle: 'Reset All Trees',
    resetAllConfirm: 'Are you sure you want to reset all trees? This action cannot be reverted.',
    cancel: 'Cancel',
    resetAllButton: 'Reset All',
    toastSwitched: 'Switched to {patchName}',
    toastReset: '{treeName} was reset',
    toastResetAll: 'All trees were reset'
  },
  strategy: {
    tabLabel: 'STRATEGY',
    title: 'Strategy',
    timemark: 'Timemark',
    area: 'Area',
    equipment: 'Equipment',
    selectScalpel: 'Select Scalpel',
    selectProbe: 'Select Probe',
    compassNumber: 'Compass {number}',
    combinedEffects: 'Combined Effects',
    effectTypes: {
      probe: 'probe',
      compass: 'compass',
      scalpel: 'scalpel'
    },
    dialogTitles: {
      probe: 'Select Probe',
      scalpel: 'Select Season Compass',
      compass: 'Select Compass'
    },
    areas: {
      glacialAbyss: 'Glacial Abyss',
      blisteringLavaSea: 'Blistering Lava Sea',
      steelForge: 'Steel Forge',
      thunderWastes: 'Thunder Wastes',
      voidlands: 'Voidlands'
    },
    timemarks: {
      profound: 'Profound',
      deepSpace: 'Deep Space'
    }
  },
  treeNames: {
    commodities: 'Commodities',
    gear: 'Gear',
    legendarygear: 'Legendary Gear',
    compass: 'Compass',
    beacons: 'Beacons',
    darksurge: 'Dark Surge',
    blacksail: 'Blacksail',
    cube: 'Cube',
    aeterna: 'Aeterna',
    nightmare: 'Nightmare',
    clockworkballet: 'Clockwork Ballet',
    folklore: 'Folklore',
    thefrozencanvas: 'The Frozen Canvas',
    arcana: 'Arcana',
    sandlord: 'Sandlord',
    outlaw: 'Outlaw',
    overrealm: 'Overrealm',
    godofwar: 'God of War',
    godofhunting: 'God of Hunting',
    godofmight: 'God of Might',
    godofmachine: 'God of Machine',
    cage: 'Cage',
    profound: 'Profound'
  },
  stats: {
    tabLabel: 'STATS',
    title: 'Stats',
    empty: 'No stats allocated',
    nodeCount: '({count} nodes)',
    timemarkOrAbove: 'Timemark {timemark} or above:'
  },
  buildActions: {
    tooltips: {
      save: 'Save',
      load: 'Load',
      import: 'Import',
      export: 'Export',
      share: 'Share',
      delete: 'Delete'
    },
    noSavedBuilds: 'No saved builds',
    saveModal: {
      title: 'Save Build',
      warning: 'This saves only into your browser\'s local storage. Use {export} to create a portable file.',
      warningBold: 'Export',
      buildName: 'Build Name',
      placeholder: 'Enter build name...',
      errorNoName: 'Please enter a build name',
      errorSaveFailed: 'Failed to save build. Storage may be full.',
      cancel: 'Cancel',
      save: 'Save'
    },
    exportModal: {
      title: 'Export Build',
      description: 'Enter a filename for your build export:',
      placeholder: 'my-build',
      extension: '.txt',
      download: 'Download'
    },
    importModal: {
      title: 'Import Build',
      tabPaste: 'Paste Code',
      tabUpload: 'Upload File',
      placeholder: 'Paste your build code here...',
      dropText: 'Drag & drop a .txt file here',
      dropLink: 'click to select',
      selected: 'Selected:',
      errors: {
        noCode: 'Please enter a build code',
        noFile: 'Please select a file first',
        invalidCode: 'Invalid build code',
        patchUnavailable: 'Build requires patch {patch} which is not available',
        applyFailed: 'Failed to apply build',
        wrongFileType: 'Please select a .txt file',
        readFailed: 'Failed to read file'
      }
    },
    shareModal: {
      title: 'Share Build',
      description: 'Copy this URL to share your build:',
      close: 'Close',
      copyUrl: 'Copy URL'
    },
    toasts: {
      importSuccess: 'Build imported successfully!',
      loadSuccess: 'Build "{name}" loaded!',
      deleteSuccess: 'Build "{name}" deleted',
      loadFailed: 'Failed to load build',
      deleteFailed: 'Failed to delete build',
      saveSuccess: 'Build "{name}" saved!',
      exportSuccess: 'Build exported successfully!',
      shareSuccess: 'Share URL copied to clipboard!'
    }
  },
  itemDialog: {
    searchPlaceholder: 'Search...',
    clearSelection: 'Clear Selection',
    alreadySelected: 'Already Selected',
    noItems: 'No items found'
  }
}
