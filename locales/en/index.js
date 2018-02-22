const requireContext = require.context('./', false, /.*\.(json)$/)
var json = {};

requireContext.keys().forEach(file => {
    var fl = requireContext(file)
    json[file.replace(/\.json$/, '').replace(/\.\//, '')] = fl
})

module.exports = json
