/* eslint-disable id-length */
export default {
  p: require('./BlackPawn').default,
  n: require('./BlackKnight').default,
  b: require('./BlackBishop').default,
  r: require('./BlackRook').default,
  q: require('./BlackQueen').default,
  k: require('./BlackKing').default,

  P: require('./WhitePawn').default,
  N: require('./WhiteKnight').default,
  B: require('./WhiteBishop').default,
  R: require('./WhiteRook').default,
  Q: require('./WhiteQueen').default,
  K: require('./WhiteKing').default
}
