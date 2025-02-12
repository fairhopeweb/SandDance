/*!
* Copyright (c) Microsoft Corporation.
* Licensed under the MIT License.
*/

export const strings = {
    appName: 'SandDance',
    bingsearch: 'Bing',
    bingsearchDescription: (term) => `Search Bing for "${term}"`,
    buttonClose: 'Close',
    buttonSelect: 'Search & Select',
    buttonColorSchemeMap: 'Map color scheme to filtered data',
    buttonColorSchemeRemap: 'Remap color to filtered data',
    buttonColorSchemeKeep: 'Keep same color scheme',
    buttonCopyToClipboard: 'Copy to clipboard',
    buttonExclude: 'Exclude',
    buttonExport: 'Export',
    buttonExportCount: (total) => total == 1 ? 'Export 1 row...' : `Export ${total} rows...`,
    buttonIsolate: 'Isolate',
    buttonReset: 'Stop filtering',
    buttonDeselect: 'Clear selection',
    buttonToolbarFloat: 'Float toolbar',
    buttonToolbarDock: 'Dock toolbar',
    buttonToolbarHide: 'Hide toolbar',
    buttonToolbarShow: 'Show toolbar',
    buttonNextDataItem: 'Next data item',
    buttonPrevDataItem: 'Previous data item',
    buttonCreateSnapshot: 'Create snapshot',
    buttonNextSnapshot: 'Next snapshot',
    buttonPrevSnapshot: 'Previous snapshot',
    buttonUpdateSnapshot: 'Update snapshot',
    buttonAddExpression: 'Add expression',
    buttonAddExpressionGroup: 'Add group',
    buttonDeleteExpression: 'Delete',
    buttonDeleteExpressionGroup: 'Delete group',
    buttonClearSnapshots: 'Clear snapshots',
    buttonDeleteSnapshot: 'Delete snapshot',
    buttonEditSnapshot: 'Edit snapshot',
    buttonMoveUp: 'Move up',
    buttonMoveDown: 'Move down',
    buttonShowVegaSpec: 'Show Vega spec',
    buttonLaunchVegaEditor: 'Open Vega Editor',
    buttonCameraHome: 'Center chart in window',
    buttonTooltipMapping: 'Tooltip columns...',
    buttonBackgroundImage: 'Background image...',
    buttonTransitionReverse: 'Play Reverse',
    buttonTransitionPause: 'Pause',
    buttonTransitionPlay: 'Play',
    buttonUndo: 'Undo',
    buttonRedo: 'Redo',
    buttonResetToDefault: 'Reset to default',
    chartTypeBarChartH: 'Bar',
    chartTypeBarChartV: 'Column',
    chartTypeDensity: 'Density',
    chartTypeGrid: 'Grid',
    chartTypeScatterPlot: 'Scatter',
    chartTypeStacks: 'Stacks',
    chartTypeStrips: 'Strips',
    chartTypeTreeMap: 'Treemap',
    defaultFileName: 'sanddance-data',
    errorExportFilenameEmpty: 'Filename cannot be blank',
    errorExportFilenameCharacters: (characters) => `A filename cannot contain any of the following characters: ${characters}`,
    errorColumnMustBeNumeric: 'Numeric column required for this chart type.',
    errorNumericValue: 'Value must be numeric',
    errorImageFormat: 'File is not an image',
    labelBackgroundImageDialogTitle: 'Background image',
    labelBackgroundImageSubtext: 'Background image can only be shown on Scatterplot, Density, and Stacks charts. Columns must be numeric type.',
    labelBackgroundApply: 'Apply',
    labelBackgroundRemove: 'Remove',
    labelBackgroundLeft: 'Left extent',
    labelBackgroundRight: 'Right extent',
    labelBackgroundBottom: 'Bottom extent',
    labelBackgroundTop: 'Top extent',
    labelBlank: 'blank',
    labelNull: 'null',
    labelTrue: 'true',
    labelFalse: 'false',
    labelSystemInfo: 'System info',
    labelChartSettings: 'Chart settings',
    labelDataBrowser: 'Data browser',
    labelDataScope: 'Scope',
    labelExport: 'Export Data',
    labelExportFormat: 'File format',
    labelExportCSV: '.CSV - Comma separated values',
    labelExportHTML: '.HTML - A SandDance html page embedding this data',
    labelExportJSON: '.JSON - JavaScript object notation',
    labelExportTSV: '.TSV - Tab separated values',
    labelHistory: 'History',
    labelTools: 'Tools',
    labelHoldCamera: 'Keep previous camera position',
    labelVegaSpec: 'Vega specification',
    labelColor: 'Chart color',
    labelError: 'Error',
    labelExportFileName: 'File name',
    labelSnapshots: 'Snapshots',
    labelSnapshotSettingThumbnailWidth: 'Thumbnail image width',
    labelSearch: 'Select by search',
    labelSearchClause: 'Clause',
    labelSearchColumn: 'Field',
    labelSearchOperator: 'Operator',
    labelSearchValue: 'Value',
    labelSearchValuePlaceholder: 'Value to search for',
    labelChart: 'Chart',
    labelChartCanvas: 'Chart canvas',
    labelColumnMapping: 'Column Mapping',
    labelChartTypeOptions: 'Chart options',
    labelColorBin: 'Color binning',
    labelColorOptions: 'Color options',
    labelColorBinExplanation: 'For numeric columns',
    labelColorFieldInfo: (colorColumnName, colorColumnType, categoricalNumeric, distinctValueCount) =>
        `Field <span className="fieldname">${colorColumnName}</span> is of type <span className="fieldtype">${colorColumnType}</span>${categoricalNumeric ? ` and has ${distinctValueCount} distinct values` : ''}.`,
    labelColorFieldIsColorData: (colorColumnName) =>
        `Field <span className="fieldname">${colorColumnName}</span> contains direct color data.`,
    labelColorBinNone: 'None (continuous)',
    labelColorBinQuantize: 'Quantize',
    labelColorBinQuantile: 'Quantile',
    labelColorFilter: 'Note: Colors will be re-mapped to the filter when viewing this snapshot.',
    labelColorScheme: 'Scheme',
    labelTotal: 'Total by',
    labelTotalByCountSquare: 'Count (Grid layout)',
    labelTotalByCountStrip: 'Count (Strip layout)',
    labelTotalBySumStrip: 'Sum (Strip layout)',
    labelTotalBySumTreemap: 'Sum (Treemap layout)',
    labelTotalBySumStripPercent: 'Sum as percentage (Strip layout)',
    labelColumnColor: 'Color by',
    labelColumnFacet: 'Facet by',
    labelFacetLayout: 'Facet layout',
    labelFacetLayoutWrap: 'Wrap',
    // labelFacetLayoutHorizontal: 'Horizontal',
    // labelFacetLayoutVertical: 'Vertical',
    labelFacetLayoutCross: '⊞',
    labelColumnFacetV: 'Cross facet by',
    labelColumnSort: 'Sort by',
    labelColumnX: 'X Axis',
    labelColumnY: 'Y Axis',
    labelColumnZ: 'Z Axis',
    labelColumnSize: 'Size by',
    labelColumnGroup: 'Group by',
    labelAliasColor: 'Color',
    labelAliasFacet: 'Facet',
    labelAliasFacetV: 'Vertical facet',
    labelAliasSort: 'Sort',
    labelAliasX: 'X Axis',
    labelAliasY: 'Y Axis',
    labelAliasZ: 'Z Axis',
    labelAliasSize: 'Size',
    labelAliasGroup: 'Group',
    labelDataItemIsFiltered: 'Item is filtered from view',
    labelHistoryInit: 'Initial view',
    labelHistoryFilterClear: 'Clear filter',
    labelHistoryFilterIExclude: 'Exclude filter',
    labelHistoryFilterIsolate: 'Isolate filter',
    labelHistoryChangeChartType: chart => `Change chart type to ${chart}`,
    labelHistoryMapColumn: column => `Map ${column} role`,
    labelHistoryUnMapColumn: column => `Unmap ${column} role`,
    labelHistoryReviveSnapshot: 'Revive snapshot',
    labelHistoryColorBin: 'Change color binning',
    labelHistoryDirectColor: 'Change direct color',
    labelRenderer: 'Renderer quality',
    labelRendererAdvancedDisabled: 'Renderer quality (Enhanced 3D mode not supported on this device)',
    labelRendererBasic: 'Standard mode',
    labelRendererAdvanced: 'Enhanced 3D mode',
    labelRendererOptions: 'Renderer options ...',
    labelRendererOptionsDialogTitle: 'Renderer options',
    labelRendererOptionsAntialias: 'Antialias',
    labelRendererOptionsBloom: 'Bloom highlighting (for selections)',
    labelRendererOptionsBloomIntensity: 'Intensity',
    labelRendererOptionsDof: 'Depth of Field',
    labelRendererOptionsDofRange: 'Focus Range',
    labelRendererOptionsFxaa: 'Antialias',
    labelRendererOptionsShadow: 'Shadows',
    labelRendererOptionsSsao: 'Screen Space Ambient Occlusion',
    labelShowLegend: 'Show legend',
    labelShowAxes: 'Show axes',
    labelSnapshotTitle: 'Title',
    labelSnapshotDescription: 'Note (optional)',
    labelTooltipMapping: 'Tooltip columns',
    labelTransition: 'Transition',
    labelTransitionOptions: 'Transition options',
    labelTransitionScrubber: 'Scrub transition',
    labelTransitionStaggerBy: 'Stagger by',
    labelTransitionStaggerByOrdinal: 'Data order',
    labelTransitionStaggerByColumn: 'Column',
    labelTransitionStaggerByPosition: 'Axis position',
    labelTransitionStaggerOptions: 'Stagger options',
    labelTransitionStaggerReverse: 'Reverse',
    labelTransitionDurations: 'Transition durations',
    labelTransitionCamera: '2D / 3D view',
    labelTransitionDuration: 'Duration',
    labelTransitionStagger: 'Stagger',
    labelVegaSpecData: 'Data reference',
    labelVegaSpecNotes: 'Note: You may need to change the color scheme to make this visible in Vega.',
    labelYes: 'Yes',
    labelNo: 'No',
    labelConfirmation: 'Are you sure?',
    loading: 'Loading...',
    schemeCategorical: 'Categorical',
    schemeDiverging: 'Diverging',
    schemeDual: 'Dual',
    schemeSequentialMultiHue: 'Sequential Multi Hue',
    schemeSequentialSingleHue: 'Sequential Single Hue',
    selectDataSpanAll: 'All rows',
    selectDataSpanFilter: 'Filtered',
    selectDataSpanSelection: 'Selected',
    selectVegaSpecDataNone: 'None',
    selectVegaSpecDataInline: 'Inline - WARNING this may use substantial browser/clipboard memory for large data sets.',
    selectVegaSpecDataUrl: 'URL',
    record: (current, total) => `${current} of ${total}`,
    searchEQ: '=',
    searchNEQ: '<>',
    searchGT: '>',
    searchGTE: '>=',
    searchLT: '<',
    searchLTE: '<=',
    searchNULL: 'is null or empty',
    searchIN: 'contains',
    searchSW: 'starts with',
    searchWHERE: 'Where',
    searchAND: 'and',
    searchOR: 'or',
    selectAny: '-- any --',
    selectNone: '-- none --',
    selectNumeric: 'Numeric',
    selectNonNumeric: 'Categorical',
    selectDirectColor: 'Direct color',
    selectReference: 'Column mappings',
    tooltipSearch: (column, value) => `Click to search in '${column}' for "${value}"`,
    labelRequired: 'required',
    labelSystem: 'System',
    labelViewType2d: 'View in 2D',
    labelViewType3d: 'View in 3D',
    labelDataColors: 'Enabled if this data column contains any CSS color values.',
    labelDataNullAll: 'Loading data...',
    labelDataNullFiltered: 'You can filter by first making a selection, then choosing <b>Isolate</b> or <b>Exclude</b> in the top bar.',
    labelDataNullSelection: 'You can select by: <ul><li>clicking the chart axes</li><li>clicking in the legend</li><li>searching</li</ul>',
    labelZeroAll: 'Dataset contains zero rows.',
    labelZeroSearchResults: 'No rows matched your search.',
    signalGroups: [
        { prefix: 'Chart', label: 'Chart options' },
        { prefix: 'Mark', label: 'Mark options' },
        { prefix: 'RoleColor', label: 'Color options' },
        { prefix: 'RoleFacet', label: 'Facet options' },
        { prefix: 'RoleSort', label: 'Sort options' },
        { prefix: 'RoleX', label: 'X axis options' },
        { prefix: 'RoleY', label: 'Y axis options' },
        { prefix: 'RoleZ', label: 'Z axis options' },
        { prefix: 'Text', label: 'Text options' },
        { prefix: '*', label: 'Options' },
    ],
    percentValueFormat: (value: number) => `${value}%`,
};
