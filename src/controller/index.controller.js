const renderIndex = (req, res) => {
   res.render('index')
}

const renderAbout = (req, res) => {
   res.render('about')
}

module.exports = {
   renderIndex,
   renderAbout
}