const model = 'api::example.example'
const populate = {
    gallery: {
        populate: {
            images: true
        }
    }
}

module.exports = {
    async beforeUpdate(event) {
        const { id } = event.params.where
        const before = await strapi.db.query(model).findOne({ where: { id }, populate })
        console.log({ before: before.gallery})
    },
    async afterUpdate(event) {
        const { result } = event
        console.log({ after: result.gallery })
    },
};
