
const modelsHelper = {}

modelsHelper.autoPopulateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'username createdAt -_id'
    })
    next()
}

modelsHelper.autoPopulateComment = function(next) {
    this.populate({
        path: '_comments',
        select: 'text createdAt _creator',
        match: { 'isDeleted': false }
    })
    next()
}

export default modelsHelper;