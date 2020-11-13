const {dateParser}= require("@masala/date");
const {Streams} = require('@masala/parser')


const parser  = dateParser.val("YYYY-MM-ddThh:mm:ss::SSS a Z");
const responseJS = parser.parse(Streams.ofString('2020-08-27T08:55:04::012 a.m. -06'));

module.exports ={responseJS}
