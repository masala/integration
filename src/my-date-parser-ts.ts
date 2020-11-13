import {dateParser} from '@masala/date'
import {Streams} from '@masala/parser'

const parserTs  = dateParser.val("YYYY-MM-ddThh:mm:ss::SSS a Z");
export const responseTs = parserTs.parse(Streams.ofString('2020-08-27T08:55:04::012 a.m. -06'));
