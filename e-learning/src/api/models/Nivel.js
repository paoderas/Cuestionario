const { DataTypes } = require("sequelize");
const sequelize = require('../../config/db');
const Materia = require("./Materia");

const Nivel = sequelize.define("niveles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  materia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Materia,
      key: "id",
    },
  },
}, {
  timestamps: false, // Configuración global para desactivar createdAt y updatedAt
});

Materia.hasMany(Nivel, { foreignKey: "materia_id" });
Nivel.belongsTo(Materia, { foreignKey: "materia_id" });

module.exports = Nivel;
