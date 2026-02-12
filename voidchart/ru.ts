/**
 * VoidChart Russian translations
 * Machine-assisted translations - Community review needed
 * These translations were generated with AI assistance and may not be
 * accurate for gaming terminology. Native speaker contributions welcome!
 */
import type { VoidChartTranslations } from '../types'

export const voidchartRu: VoidChartTranslations = {
  page: {
    backButton: 'главная',
    loading: 'Загрузка данных древа...'
  },
  pointsCounter: {
    points: 'Очки',
    profound: 'Глубокий',
    profoundTooltip: 'Глубокий (Основной узел)'
  },
  skillTree: {
    noData: 'Нет загруженных данных для этого древа.',
    runScraper: 'Запустите скрапер для генерации данных древа.',
    searchPlaceholder: 'Поиск узлов...',
    reset: 'Сброс',
    resetCurrent: 'Сбросить текущее древо',
    resetAll: 'Сбросить все древа',
    resetAllTitle: 'Сбросить все древа',
    resetAllConfirm: 'Вы уверены, что хотите сбросить все древа? Это действие нельзя отменить.',
    cancel: 'Отмена',
    resetAllButton: 'Сбросить все',
    toastSwitched: 'Переключено на {patchName}',
    toastReset: '{treeName} сброшено',
    toastResetAll: 'Все древа сброшены'
  },
  strategy: {
    tabLabel: 'СТРАТЕГИЯ',
    title: 'Стратегия',
    timemark: 'Временная метка',
    area: 'Зона',
    equipment: 'Снаряжение',
    selectScalpel: 'Выбрать скальпель',
    selectProbe: 'Выбрать зонд',
    compassNumber: 'Компас {number}',
    combinedEffects: 'Комбинированные эффекты',
    effectTypes: {
      probe: 'зонд',
      compass: 'компас',
      scalpel: 'скальпель'
    },
    dialogTitles: {
      probe: 'Выбрать зонд',
      scalpel: 'Выбрать сезонный компас',
      compass: 'Выбрать компас'
    },
    areas: {
      glacialAbyss: 'Ледниковая бездна',
      blisteringLavaSea: 'Раскаленное море лавы',
      steelForge: 'Стальная кузница',
      thunderWastes: 'Громовые пустоши',
      voidlands: 'Земли пустоты'
    },
    timemarks: {
      profound: 'Глубокий',
      deepSpace: 'Дип Спейс'
    }
  },
  treeNames: {
    commodities: 'Товары',
    gear: 'Снаряжение',
    legendarygear: 'Легендарное снаряжение',
    compass: 'Компас',
    beacons: 'Маяки',
    darksurge: 'Тёмный выброс',
    blacksail: 'Чёрный парус',
    cube: 'Куб',
    aeterna: 'Этерна',
    nightmare: 'Кошмар',
    clockworkballet: 'Заводной балет',
    folklore: 'Фольклор',
    thefrozencanvas: 'Замёрзший холст',
    arcana: 'Аркана',
    sandlord: 'Песчаный лорд',
    outlaw: 'Вне закона',
    overrealm: 'Оверрелм',
    godofwar: 'Бог войны',
    godofhunting: 'Бог охоты',
    godofmight: 'Бог силы',
    godofmachine: 'Бог машин',
    cage: 'Клетка',
    profound: 'Глубокий'
  },
  stats: {
    tabLabel: 'СТАТИСТИКА',
    title: 'Статистика',
    empty: 'Нет распределенных характеристик',
    nodeCount: '({count} узлов)',
    timemarkOrAbove: 'Временная метка {timemark} или выше:'
  },
  buildActions: {
    tooltips: {
      save: 'Сохранить',
      load: 'Загрузить',
      import: 'Импорт',
      export: 'Экспорт',
      share: 'Поделиться',
      delete: 'Удалить'
    },
    noSavedBuilds: 'Нет сохраненных сборок',
    saveModal: {
      title: 'Сохранить сборку',
      warning: 'Это сохраняет только в локальное хранилище браузера. Используйте {export} для создания переносимого файла.',
      warningBold: 'Экспорт',
      buildName: 'Название сборки',
      placeholder: 'Введите название сборки...',
      errorNoName: 'Пожалуйста, введите название сборки',
      errorSaveFailed: 'Не удалось сохранить сборку. Возможно, хранилище заполнено.',
      cancel: 'Отмена',
      save: 'Сохранить'
    },
    exportModal: {
      title: 'Экспорт сборки',
      description: 'Введите имя файла для экспорта сборки:',
      placeholder: 'моя-сборка',
      extension: '.txt',
      download: 'Скачать'
    },
    importModal: {
      title: 'Импорт сборки',
      tabPaste: 'Вставить код',
      tabUpload: 'Загрузить файл',
      placeholder: 'Вставьте код сборки здесь...',
      dropText: 'Перетащите .txt файл сюда',
      dropLink: 'нажмите чтобы выбрать',
      selected: 'Выбрано:',
      errors: {
        noCode: 'Пожалуйста, введите код сборки',
        noFile: 'Пожалуйста, сначала выберите файл',
        invalidCode: 'Неверный код сборки',
        patchUnavailable: 'Сборка требует патч {patch}, который недоступен',
        applyFailed: 'Не удалось применить сборку',
        wrongFileType: 'Пожалуйста, выберите .txt файл',
        readFailed: 'Не удалось прочитать файл'
      }
    },
    shareModal: {
      title: 'Поделиться сборкой',
      description: 'Скопируйте этот URL, чтобы поделиться сборкой:',
      close: 'Закрыть',
      copyUrl: 'Копировать URL'
    },
    toasts: {
      importSuccess: 'Сборка успешно импортирована!',
      loadSuccess: 'Сборка "{name}" загружена!',
      deleteSuccess: 'Сборка "{name}" удалена',
      loadFailed: 'Не удалось загрузить сборку',
      deleteFailed: 'Не удалось удалить сборку',
      saveSuccess: 'Сборка "{name}" сохранена!',
      exportSuccess: 'Сборка успешно экспортирована!',
      shareSuccess: 'URL для обмена скопирован в буфер обмена!'
    }
  },
  itemDialog: {
    searchPlaceholder: 'Поиск...',
    clearSelection: 'Очистить выбор',
    alreadySelected: 'Уже выбрано',
    noItems: 'Предметы не найдены'
  }
}
