const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // tu instancia de Sequelize

const User = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM("Admin", "Instructor", "Estudiante"), // ajusta según tus roles
    defaultValue: "Estudiante",
  },
},
  // si deseas relacionar con la tabla 'estudiantes' para más datos, 
  // podrías tener un campo "estudiante_id", etc.
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = User;
