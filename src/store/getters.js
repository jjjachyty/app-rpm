// getters
export const checkOutTree = state => state.tree
export const checkOutLnBusiness = function(state) {
    console.log("checkOutLnBusiness")
    return state.lnBusiness
}
export const checkOutLnPricingSetp = state => state.lnPricingSetp
export const checkOutMessage = state => state.message
export const checkOutAuth = state => state.auth
export const checkOutToast = state => state.toast