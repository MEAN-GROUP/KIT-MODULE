const { validate, ValidationError, Joi } = require('express-validation')

const schema = {
    addKitToStock: Joi.object({
        serialNo: Joi.string().max(100).required(),
        kitType: Joi.string().required()
    }),

    loginvalidation: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    }),

    addDeliveryStaff: Joi.object({
        name: Joi.string().max(100).required(),
        email: Joi.string().email().required(),
        fathername: Joi.string().required(),
        dob: Joi.string().required(),
        licenseno: Joi.string().required(),
        mobileno: Joi.number().required(),
        gender: Joi.string().required(),
        address: Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            postalcode: Joi.string().required(),
            country: Joi.string().required()
        })
    }),

    addDeliveryOrderList: Joi.object({
        PatientName: Joi.string().max(100).required(),
        patientId: Joi.string().required(),
        fathername: Joi.string().required(),
        kitType: Joi.string().required(),
        dateTime: Joi.date().required(),
        mobileno: Joi.number().required(),
        empId: Joi.number().required(),
        address: Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            postalcode: Joi.string().required(),
            country: Joi.string().required()
        })
    }),

    updateDeliveryStaffListParams: Joi.object({
        empId: Joi.number().required()

    }),

    updateDeliverConfirmParams: Joi.object({
        serialNo: Joi.string().required()

    }),

    updateDeliverConfirmtBody: Joi.object({
        patientId: Joi.string().required(),
    }),

    getKitDetails: Joi.object({
        serialNo: Joi.number().max(100).required()
    }),

    getKitStatus: Joi.object({
        serialNo: Joi.number().max(100).required()
    }),

    kitStatusUpdateparams: Joi.object({
        serialNo: Joi.number().max(100).required()
    }),

    kitStatusUpdatebody: Joi.object({
        status: Joi.string().required()
    }),

    kitReturnparams: Joi.object({
        serialNo: Joi.string().max(100).required()
    }),

    kitReturnbody: Joi.object({
        status: Joi.string().required()
    }),

    kitExchangeparams: Joi.object({
        oldSerialNo: Joi.string().max(100).required()
    }),

    kitExchangebody: Joi.object({
        newSerialNo: Joi.string().max(100).required(),
        remark: Joi.string().required()
    }),


    kitDelete: Joi.object({
        serialNo: Joi.string().required()
    }),

    deliveryStaffDelete: Joi.object({
        empId: Joi.number().required()
    }),

    updateKitDetailparams: Joi.object({
        serialNo: Joi.number().required()
    }),

    updateKitDetailbody: Joi.object({
        kitType: Joi.string().required(),
        kitPrice: Joi.number().required(),
        status: Joi.string().required()
    })



}
module.exports = schema;