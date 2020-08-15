const { addKitToStock } = require('./kit.schema')
const { getKitDetails } = require('./kit.schema')
const { getKitStatus } = require('./kit.schema')
const { kitStatusUpdateparams } = require('./kit.schema')
const { kitStatusUpdatebody } = require('./kit.schema')
const { updateKitDetailparams } = require('./kit.schema')
const { updateKitDetailbody } = require('./kit.schema')
const { kitReturnparams } = require('./kit.schema')
const { kitReturnbody } = require('./kit.schema')
const { kitDelete } = require('./kit.schema')
const { kitExchangeparams } = require('./kit.schema')
const { kitExchangebody } = require('./kit.schema')
const { addDeliveryStaff } = require('./kit.schema')
const { updateDeliveryStaffListParams } = require('./kit.schema')
const { updateDeliveryStaffListBody } = require('./kit.schema')
const { deliveryStaffDelete } = require('./kit.schema')
const { addDeliveryOrderList } = require('./kit.schema')
const { updateDeliverConfirmtBody } = require('./kit.schema')
const { updateDeliverConfirmParams } = require('./kit.schema')
const { loginvalidation } = require('./kit.schema')




module.exports = {
    loginvalidationValidation: async(req, res, next) => {
        const value = await loginvalidation.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    },

    addKitToStockValidation: async(req, res, next) => {
        const value = await addKitToStock.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    },

    addDeliveryStaffValidation: async(req, res, next) => {
        const value = await addDeliveryStaff.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    },

    addDeliveryOrderListValidation: async(req, res, next) => {
        const value = await addDeliveryOrderList.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    },

    getKitDetailsValidation: async(req, res, next) => {
        const value = await getKitDetails.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    getKitStatusValidation: async(req, res, next) => {
        const value = await getKitStatus.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    kitStatusUpdateparamsValidation: async(req, res, next) => {
        const value = await kitStatusUpdateparams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },
    kitStatusUpdatebodyValidation: async(req, res, next) => {
        const value = await kitStatusUpdatebody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    kitReturnparamsValidation: async(req, res, next) => {
        const value = await kitReturnparams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },
    kitReturnbodyValidation: async(req, res, next) => {
        const value = await kitReturnbody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    kitExchangeparamsValidation: async(req, res, next) => {
        const value = await kitExchangeparams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    kitExchangebodyValidation: async(req, res, next) => {
        const value = await kitExchangebody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    kitDeleteValidation: async(req, res, next) => {
        const value = await kitDelete.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    deliveryStaffDeleteValidation: async(req, res, next) => {
        const value = await deliveryStaffDelete.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    updateKitDetailparamsValidation: async(req, res, next) => {
        const value = await updateKitDetailparams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    updateDeliverConfirmparamsValidation: async(req, res, next) => {
        const value = await updateDeliverConfirmParams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    updateDeliverConfirmtBodyValidation: async(req, res, next) => {
        const value = await updateDeliverConfirmtBody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    updateKitDetailbodyValidation: async(req, res, next) => {
        const value = await updateKitDetailbody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },

    updateDeliveryStaffListParamsValidation: async(req, res, next) => {
        const value = await updateDeliveryStaffListParams.validate(req.params);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    },


    updateDeliveryStaffListBodyValidation: async(req, res, next) => {
        const value = await updateDeliveryStaffListBody.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }

    }
}