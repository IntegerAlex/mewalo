from flask import Flask ,request , jsonify
from routes.product import product_bp
from routes.categories import category_bp
import gunicorn
app = Flask(__name__)

app.register_blueprint(product_bp, url_prefix='/api/v1/product')
app.register_blueprint(category_bp, url_prefix='/api/v1/categories')

@app.route('/', methods=['GET'])
def hello():
    return jsonify({"success": True, "message": "We are live"})

if __name__ == '__main__':
    app.run(debug=True)
# Gunicorn command to run the app
# gunicorn main:app --bind
