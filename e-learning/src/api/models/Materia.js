const { DataTypes } = require("sequelize");
const sequelize = require('../../config/db');

const Materia = sequelize.define("materias", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100), // Matches varchar(100)
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT, // Matches text column
    allowNull: true, // Based on the assumption that it's nullable
  },
}, {
  tableName: "materias", // Explicitly set the table name
  timestamps: false, // Disable createdAt and updatedAt if not present in the table
});

module.exports = Materia;
