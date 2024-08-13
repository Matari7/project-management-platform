from flask import Blueprint, request, jsonify
from audit_controller import create_audit_record, get_audit_record, get_all_audit_records

audit_blueprint = Blueprint('audit', __name__)

@audit_blueprint.route('/audit', methods=['POST'])
def create_audit():
    data = request.json
    audit_id = create_audit_record(data)
    return jsonify({"message": "Audit record created", "id": audit_id}), 201

@audit_blueprint.route('/audit/<audit_id>', methods=['GET'])
def get_audit(audit_id):
    audit_record = get_audit_record(audit_id)
    if audit_record:
        return jsonify(audit_record), 200
    else:
        return jsonify({"message": "Audit record not found"}), 404

@audit_blueprint.route('/audits', methods=['GET'])
def get_audits():
    audits = get_all_audit_records()
    return jsonify(audits), 200
