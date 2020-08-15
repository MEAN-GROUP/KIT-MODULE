const mongo = require('mongodb');
const { response } = require('express');
const mongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";
const DB = "kitModule";


exports.addKitToStock = (data, callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitPrice").findOne({ kitType: data.kitType }, function(err, result) {
            if (err) throw err;
            data.kitPrice = result.kitPrice;
            data.status = "Available";

            dbo.collection("kitMaster").insertOne(data, function(err, res) {
                if (err) throw err;

                let response = {
                    message: "Kit details successfully added to stock."
                }
                callback(response);
                db.close();
            });
        })
    })
}

exports.loginvalidation = function(body, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log(body.email);
        dbo.collection("deliveryPersonList").aggregate([{
            $match: { email: body.email, password: body.password }
        }]).toArray(
            function(err, result) {
                if (err) throw err;
                console.log(result)
                callback(result);
                db.close();
            });
    });
}

exports.addDeliveryOrderList = (data, callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        let empId = data.empId;
        dbo.collection("deliveryPersonList").findOne({ empId: +empId }, function(err, result) {
            if (err) throw err;
            data.name = result.name;
            data.status = "Assigned";
            dbo.collection("deliveryOrderList").insertOne(data, function(err, res) {
                if (err) throw err;

                let response = {
                    message: "Order added successfully in the list."
                }
                callback(response);
                db.close();
            });
        });
    });
}

exports.addDeliveryStaff = (data, callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("deliveryPersonList").find().sort({ "empId": -1 }).toArray(function(err, result) {
            if (err) throw err;
            let newempId;
            if (result.length == 0) {
                newempId = 1;
            } else {
                newempId = result[0].empId + 1;
            }
            data.empId = newempId;
            dbo.collection("deliveryPersonList").insertOne(data, function(err, res) {
                if (err) throw err;

                let response = {
                    empId: newempId,
                    message: "Delivery staff details added successfully."
                }
                callback(response);
                db.close();
            });
        })
    })
}

exports.getDeliveryStaffList = (callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection('deliveryPersonList').find().toArray(function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}

exports.getViewDeliveryOrderList = (email, callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log(empId);
        dbo.collection('deliveryOrderList').find({ email: email.email }).toArray(function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}

exports.getAllKitList = (callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection('kitMaster').find().toArray(function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}

exports.getOrderList = (callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection('kitorderlist').find().toArray(function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}

exports.getKitStockDetails = (callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection('kitMaster').aggregate([{
                $project: {
                    kitType: 1,
                    available: {
                        $cond: [{ $eq: ["$status", "Available"] }, 1, 0]
                    },
                }
            },
            {
                $group: {
                    _id: "$kitType",
                    available: { $sum: "$available" }
                }
            }
        ]).toArray(function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}


exports.getKitStockList = (callback) => {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        const aggregation = [{
                $project: {
                    kitType: 1,
                    available: {
                        $cond: [{ $eq: ["$status", "Available"] }, 1, 0]
                    },
                    returned: {
                        $cond: [{ $eq: ["$status", "Returned"] }, 1, 0]
                    },
                    booked: {
                        $cond: [{ $eq: ["$status", "Booked"] }, 1, 0]
                    },
                    allocated: {
                        $cond: [{ $eq: ["$status", "Allocated"] }, 1, 0]
                    }
                }
            },
            {
                $group: {
                    _id: "$kitType",
                    available: { $sum: "$available" },
                    returned: { $sum: "$returned" },
                    booked: { $sum: "$booked" },
                    allocated: { $sum: "$allocated" }
                }
            }
        ];
        dbo.collection('kitMaster').aggregate(aggregation).toArray(function(err, result) {
            if (err) throw err;
            var results = result;
            callback(results);
            db.close();
        });
    });

}


exports.getKitDetails = function(serialNo, callback) {

    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitMaster").findOne({ serialNo: serialNo }, function(err, result) {
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    });
}

exports.getKitStatus = function(serialNo, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitMaster").findOne({ serialNo: serialNo }, function(err, result) {
            if (err) throw err;
            // var results = JSON.stringify(result);
            callback(result);
            db.close();
        });
    });
}

exports.kitStatusUpdate = function(serialNo, updateBody, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitMaster").updateOne({ serialNo: serialNo }, { $set: updateBody }, function(err, result) {
            if (err) throw err;
            let response = {
                message: "Kit Status updated successfully."
            }
            callback(response);
            db.close();
        });
    });
}

exports.kitReturn = function(serialNoObj, updateBody, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log(updateBody);
        dbo.collection("kitMaster").updateOne(serialNoObj, { $set: updateBody }, function(err, result) {
            if (err) throw err;
            let response = {
                message: "Kit return successfully."
            }
            callback(response);
            db.close();
        });
    });
}

exports.kitExchange = function(oldSerialNo, updateBody, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        let status1 = { status: "Returned", remark: updateBody.remark };
        dbo.collection("kitMaster").updateOne({ serialNo: oldSerialNo.oldSerialNo }, { $set: status1 }, function(err, result) {
            if (err) throw err;
            let status2 = { status: "Allocated" };
            let newSerialNo = { serialNo: updateBody.newSerialNo };
            dbo.collection("kitMaster").updateOne(newSerialNo, { $set: status2 }, function(err, result) {
                if (err) throw err;
                let response = {
                    message: "Kit return successfully."
                }
                callback(response);
                db.close();
            });
        });
    })
}

exports.kitDelete = function(serialNoObj, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitMaster").deleteOne(serialNoObj, function(err, result) {
            if (err) throw err;
            let response = {
                message: "Deleted successfully."
            }
            callback(response);
            db.close();
        });
    });
}

exports.deliveryStaffDelete = function(empId, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log("database");
        console.log(empId);
        dbo.collection("deliveryPersonList").deleteOne({ empId: +empId.empId }, function(err, result) {
            if (err) throw err;
            let response = {
                message: "Deleted successfully."
            }
            callback(response);
            db.close();
        });
    });
}

exports.updateDeliveryStaffDetail = function(empId, updateBody, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("deliveryPersonList").updateOne({ empId: +empId.empId }, { $set: updateBody }, function(err, result) {
            if (err) throw err;
            console.log(updateBody);
            let response = {
                message: "Delivery staff details updated successfully."
            }
            callback(response);
            db.close();
        });
    });
}

exports.updateDeliverConfirm = function(serialNo, patientId, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log(serialNo);
        console.log(patientId);
        status1 = { status: "Allocated" };
        dbo.collection("kitMaster").updateOne({ serialNo: serialNo.serialNo }, { $set: status1 }, function(err, result) {
            if (err) throw err;
            status2 = { status: "Delivered" };
            dbo.collection("deliveryOrderList").updateOne({ patientId: patientId.patientId }, { $set: status2 }, function(err, result) {
                if (err) throw err;
                // console.log(updateBody);
                let response = {
                    message: "Delivery staff details updated successfully."
                }
                callback(response);
                db.close();
            });
        });
    });
}

exports.updateKitDetail = function(serialNo, updateBody, callback) {
    mongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        dbo.collection("kitMaster").updateOne({ serialNo: serialNo }, { $set: updateBody }, function(err, result) {
            if (err) throw err;
            let response = {
                message: "Kit details updated successfully."
            }
            callback(response);
            db.close();
        });
    });
}