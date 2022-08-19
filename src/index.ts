module.exports = function (flag) {
  if (flag) {
    return false
  }
  return true
}

module.exports.uncovered = uncovered

function uncovered () {
  return true
}
