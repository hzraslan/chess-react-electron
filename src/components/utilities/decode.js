const charCodeOffset = 97

const decode = {
  fromPieceDecl: pos => {
    const [piece, square] = pos.split('@')
    const x = square.toLowerCase().charCodeAt(0) - charCodeOffset
    const y = Number(square[1]) - 1
    return {x, y, piece, square}
  },

  charCodeOffset
}
export default decode