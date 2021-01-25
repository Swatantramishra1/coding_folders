function gameSettingsWithNullish(options) {
    options.gameSpeed ??= 1
    options.gameDiff ??= 'easy' 
    return options
  }
  
  
  function gameSettingsWithDefaultParams(gameSpeed=1, gameDiff='easy') {
    return {gameSpeed, gameDiff}
    }
  
  gameSettingsWithNullish({gameSpeed: null, gameDiff: null}) 
  gameSettingsWithDefaultParams(null, null)