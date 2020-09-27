module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@use "~@/styles/base.scss";`
			}
		}
	}
};