const {X} = require('@masala/x')

const {dateParser} = require('@masala/date')
const {Streams} = require('@masala/parser')


const datParser = dateParser.val('YYYY-MM-ddThh:mm:ss::SSS a Z')
const takeParser = X.take(['<', 'xxx', '>']).map(t => t.join(''))

const responseJS = datParser.parse(Streams.ofString('2020-08-27T08:55:04::012 a.m. -06'))
const takeVal = takeParser.val('<xxx>')


module.exports = {responseJS, takeVal}
