const express = require('express');
const router = express.Router();
module.exports = router;
const kitDll = require('../DLL/kitDll');
const { addKitToStockValidation } = require('../validation/kit/kit.validation');
const { getKitDetailsValidation } = require('../validation/kit/kit.validation');
const { getKitStatusValidation } = require('../validation/kit/kit.validation');
const { kitStatusUpdateparamsValidation } = require('../validation/kit/kit.validation');
const { kitStatusUpdatebodyValidation } = require('../validation/kit/kit.validation');
const { updateKitDetailparamsValidation } = require('../validation/kit/kit.validation');
const { updateKitDetailbodyValidation } = require('../validation/kit/kit.validation');
const { kitDeleteValidation } = require('../validation/kit/kit.validation');
const { kitReturnparamsValidation } = require('../validation/kit/kit.validation');
const { kitReturnbodyValidation } = require('../validation/kit/kit.validation');
const { kitExchangeparamsValidation } = require('../validation/kit/kit.validation');
const { kitExchangebodyValidation } = require('../validation/kit/kit.validation');
const { addDeliveryStaffValidation } = require('../validation/kit/kit.validation');
const { updateDeliveryStaffListParamsValidation } = require('../validation/kit/kit.validation');
const { updateDeliveryStaffListBodyValidation } = require('../validation/kit/kit.validation');
const { deliveryStaffDeleteValidation } = require('../validation/kit/kit.validation');
const { addDeliveryOrderListValidation } = require('../validation/kit/kit.validation');
const { updateDeliverConfirmparamsValidation } = require('../validation/kit/kit.validation');
const { updateDeliverConfirmtBodyValidation } = require('../validation/kit/kit.validation');
const { loginvalidationValidation } = require('../validation/kit/kit.validation');

/**
 * @swagger
 * /kit/addKitToStock:
 *  post:
 *    description: Add kit to the stock.
 *    parameters:
 *       - in: body
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: Company id of the kit.
 *       - in: body
 *         name: kitType
 *         schema:
 *           type: string
 *         required: true
 *         description: Which type of kit will be add to stock.
 *       - in: body
 *         name: kitPrice
 *         schema:
 *           type: string
 *         required: true
 *         description: Price of the kit.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *         required: true
 *         description: status of the kit.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.post('/addKitToStock', addKitToStockValidation, function(req, res) {
    kitDll.addKitToStock(req.body, function(result) {
        console.log(result);
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/loginvalidation:
 *  post:
 *    description: validate user from the server.
 *    parameters:
 *       - in: body
 *         name: email
 *         schema:
 *           type: email
 *         required: true
 *         description: email or userid of user.
 *       - in: body
 *         name: password
 *         schema:
 *           type: string
 *         required: true
 *         description: password provided by user.
 *    responses: 
 *      '200':
 *        description: if matched them login successfull.
 */
router.post('/loginvalidation', loginvalidationValidation, function(req, res) {
    kitDll.loginvalidation(req.body, function(result) {
        console.log(result[0], "kitjs");
        res.send(result[0]);
    });
});


/**
 * @swagger
 * /kit/addDeliveryStaff:
 *  post:
 *    description: Add Delivery Staff to the Database.
 *    parameters:
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of delivery staff.
 *       - in: body
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email of delivery staff.
 *       - in: body
 *         name: fathername
 *         schema:
 *           type: string
 *         required: true
 *         description: fathername of delivery staff.
 *       - in: body
 *         name: dob
 *         schema:
 *           type: string
 *         required: true
 *         description: dob of delivery staff.
 *       - in: body
 *         name: licenceno
 *         schema:
 *           type: string
 *         required: true
 *         description: licence no. of delivery staff.
 *       - in: body
 *         name: mobileno
 *         schema:
 *           type: string
 *         required: true
 *         description: mobile no. of delivery staff.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.post('/addDeliveryStaff', addDeliveryStaffValidation, function(req, res) {
    kitDll.addDeliveryStaff(req.body, function(result) {
        console.log(result);
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/addDeliveryOrderList:
 *  post:
 *    description: Add Delivery Staff to the Database.
 *    parameters:
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of delivery staff.
 *       - in: body
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: email of delivery staff.
 *       - in: body
 *         name: fathername
 *         schema:
 *           type: string
 *         required: true
 *         description: fathername of delivery staff.
 *       - in: body
 *         name: dob
 *         schema:
 *           type: string
 *         required: true
 *         description: dob of delivery staff.
 *       - in: body
 *         name: licenceno
 *         schema:
 *           type: string
 *         required: true
 *         description: licence no. of delivery staff.
 *       - in: body
 *         name: mobileno
 *         schema:
 *           type: string
 *         required: true
 *         description: mobile no. of delivery staff.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.post('/addDeliveryOrderList', addDeliveryOrderListValidation, function(req, res) {
    kitDll.addDeliveryOrderList(req.body, function(result) {
        console.log(result);
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/getDeliveryStaffList:
 *  get:
 *    description: This API will retrive all the delivery staff list from the server.  
 *    responses:
 *      '200':
 *        description: geta list of delivery staff datas
 *        content:
 *          application/Json:
 *          schema:
 *              type:Array
 *          description: A list of delivery staff details.
 */
router.get("/getDeliveryStaffList", function(req, res) {
    kitDll.getDeliveryStaffList(function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/getViewDeliveryOrderList:
 *  get:
 *    description: This API will retrive all the delivery staff list from the server.  
 *    responses:
 *      '200':
 *        description: geta list of delivery staff datas
 *        content:
 *          application/Json:
 *          schema:
 *              type:Array
 *          description: A list of delivery staff details.
 */
router.get("/getViewDeliveryOrderList/:empId", function(req, res) {
    kitDll.getViewDeliveryOrderList(req.params, function(result) {
        res.send(result);
    });
});

// /**
//  * @swagger
//  * /kit/getKitStockDetails:
//  *  get:
//  *    description: This API will retrive stock list from the server.  
//  *    responses:
//  *      '200':
//  *        description: geta list of kit data
//  *        content:
//  *          application/Json:
//  *          schema:
//  *              type:Array
//  *          description: A list of kit details.
//  */
router.get("/getKitStockList", function(req, res) {
    kitDll.getKitStockList(function(result) {
        res.send(result);
    });
});


/**
 * @swagger
 * /kit/getAllKitList:
 *  get:
 *    description: This API will retrive all the stock list from the server.  
 *    responses:
 *      '200':
 *        description: geta list of kit datas
 *        content:
 *          application/Json:
 *          schema:
 *              type:Array
 *          description: A list of kit details.
 */
router.get("/getAllKitList", function(req, res) {
    kitDll.getAllKitList(function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/getOrderList:
 *  get:
 *    description: This API will retrive all the stock list from the server.  
 *    responses:
 *      '200':
 *        description: geta list of kit datas
 *        content:
 *          application/Json:
 *          schema:
 *              type:Array
 *          description: A list of kit details.
 */
router.get("/getOrderList", function(req, res) {
    kitDll.getOrderList(function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/getKitDetails:
 *  get:
 *    description: This will retrive the details data of a kit from the server using serialNo as input
 *    parameters:
 *       - in: query
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique Id generated by the system.
 *    responses: 
 *      '200':
 *        description: A specific Kit details will be diplayed.
 *        content:
 *          application/Json:
 *          schema:
 *              type:object
 *          description: A specific kit details.
 */
router.get("/getKitDetails/:serialNo", getKitDetailsValidation, function(req, res) {
    kitDll.getKitDetails(req.params, function(result) {
        console.log(result);
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/getKitStatus:
 *  get:
 *    description: This will retrive the details about the status of the kit.
 *    parameters:
 *       - in: query
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: String ID of the kit to get
 *    responses: 
 *      '200':
 *        description: Kit details will be diplayed.
 *        content:
 *          application/Json:
 *          schema:
 *              type:object
 *          description: A specific kit details.
 */
router.get("/getKitStatus/:serialNo", getKitStatusValidation, function(req, res) {
    kitDll.getKitStatus(req.params, function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/kitStatusUpdate:
 *  put:
 *    description: This will update the status of the kit in the server.
 *    parameters:
 *       - in: params
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id of the kit.
 *       - in: body
 *         name: Status
 *         schema:
 *           type: string
 *         required: true
 *         description: Current status of the Kit.
 *    responses: 
 *      '200':
 *        description: Successfully Updated kit Status.
 */
router.put("/kitStatusUpdate/:serialNo", kitStatusUpdateparamsValidation, kitStatusUpdatebodyValidation, function(req, res) {

    kitDll.kitStatusUpdate(req.params, req.body, function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/kitReturn:
 *  put:
 *    description: This API will update returned kit to the server
 *    parameters:
 *       - in: params
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id of the kit.
 *       - in: body
 *         name: Status
 *         schema:
 *           type: string
 *         required: true
 *         description: Current status of the Kit.
 *    responses: 
 *      '200':
 *        description: Successfully Updated kit Status.
 */
router.put("/kitReturn/:serialNo", kitReturnparamsValidation, kitReturnbodyValidation, function(req, res) {
    kitDll.kitReturn(req.params, req.body, function(result) {
        res.send(result);
    });
});

/**
 * @swagger
 * /kit/kitExchange:
 *  put:
 *    description: This API will update returned kit to the server
 *    parameters:
 *       - in: params
 *         name: oldSerialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique id provieded by the manufacture.
 *       - in: body
 *         name: Status
 *         schema:
 *           type: string
 *         required: true
 *         description: Current status of the new Kit.
 *       - in: body
 *         name: newSerialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: Current serial number of the Kit.
 *    responses: 
 *      '200':
 *        description: Successfully Updated kit Status.
 */
router.put("/kitExchange/:oldSerialNo", kitExchangeparamsValidation, kitExchangebodyValidation, function(req, res) {
    // status = "Returned";
    // req.body.status = status;
    // console.log(req.body);
    kitDll.kitExchange(req.params, req.body, function(result) {
        res.send(result);
    });
});

/**
 /kit/deliveryStaffDelete:
 *  put:
 *    description: This will deleta data from the server
 *    parameters:
 *       - in: params
 *         name: empId
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id of the delivery staff.
 *    responses: 
 *      '200':
 *        description: kit Deleted Successfully.
 */
router.delete("/deliveryStaffDelete/:empId", deliveryStaffDeleteValidation, function(req, res) {
    kitDll.deliveryStaffDelete(req.params, function(result) {
        res.send(result);
    });
});

/**
 /kit/kitDelete:
 *  put:
 *    description: This will deleta data from the server
 *    parameters:
 *       - in: params
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id of the kit.
 *    responses: 
 *      '200':
 *        description: kit Deleted Successfully.
 */
router.delete("/kitDelete/:serialNo", kitDeleteValidation, function(req, res) {
    kitDll.kitDelete(req.params, function(result) {
        res.send(result);
    });
});

/**
 * /kit/updateDeliveryStaffDetail:
 *  put:
 *    description: This will update a specific delivery staff detail in server
 *    parameters:
 *       - in: params
 *         name: empId
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id for the kit.
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of the delivery staff.
 *       - in: body
 *         name: kitType
 *         schema:
 *           type: string
 *         required: true
 *         description: Which type of kit will be add to stock.
 *       - in: body
 *         name: kitPrice
 *         schema:
 *           type: string
 *         required: true
 *         description: Price of the kit.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *         required: true
 *         description: status of the kit.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.put('/updateDeliveryStaffDetail/:empId', updateDeliveryStaffListParamsValidation, updateDeliveryStaffListBodyValidation, function(req, res) {
    kitDll.updateDeliveryStaffDetail(req.params, req.body, function(result) {
        res.send(result);
    });
});

/**
 * /kit/updateDeliverConfirm:
 *  put:
 *    description: This will update a specific delivery staff detail in server
 *    parameters:
 *       - in: params
 *         name: empId
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id for the kit.
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: name of the delivery staff.
 *       - in: body
 *         name: kitType
 *         schema:
 *           type: string
 *         required: true
 *         description: Which type of kit will be add to stock.
 *       - in: body
 *         name: kitPrice
 *         schema:
 *           type: string
 *         required: true
 *         description: Price of the kit.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *         required: true
 *         description: status of the kit.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.put('/updateDeliverConfirm/:serialNo', updateDeliverConfirmparamsValidation, updateDeliverConfirmtBodyValidation, function(req, res) {
    kitDll.updateDeliverConfirm(req.params, req.body, function(result) {
        res.send(result);
    });
});


/**
 * /kit/updateKitDetail:
 *  put:
 *    description: This will update a specific kit detail in server
 *    parameters:
 *       - in: params
 *         name: serialNo
 *         schema:
 *           type: string
 *         required: true
 *         description: System generated id for the kit.
 *       - in: body
 *         name: referenceNo
 *         schema:
 *           type: string
 *         required: true
 *         description: Company id of the kit.
 *       - in: body
 *         name: kitType
 *         schema:
 *           type: string
 *         required: true
 *         description: Which type of kit will be add to stock.
 *       - in: body
 *         name: kitPrice
 *         schema:
 *           type: string
 *         required: true
 *         description: Price of the kit.
 *       - in: body
 *         name: status
 *         schema:
 *           type: string
 *         required: true
 *         description: status of the kit.
 *    responses: 
 *      '200':
 *        description: Successfully added to stock.
 */
router.put('/updateKitDetail/:serialNo', updateKitDetailparamsValidation, updateKitDetailbodyValidation, function(req, res) {
    kitDll.updateKitDetail(req.params, req.body, function(result) {
        res.send(result);
    });
});

module.exports = router;