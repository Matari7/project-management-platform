from flask import jsonify
from bson.objectid import ObjectId
from db_connection import db

def create_audit_record(data):
    audit_id = db.audits.insert_one(data).inserted_id
    return str(audit_id)

def get_audit_record(audit_id):
    audit_record = db.audits.find_one({"_id": ObjectId(audit_id)})
    if audit_record:
        audit_record["_id"] = str(audit_record["_id"])
    return audit_record

def get_all_audit_records():
    audits = list(db.audits.find())
    for audit in audits:
        audit["_id"] = str(audit["_id"])
    return audits
