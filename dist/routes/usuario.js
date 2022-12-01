"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy91c3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQThCO0FBQzlCLHNEQUEwRztBQUcxRyxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBVyxDQUFDLENBQUM7QUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUscUJBQVUsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLHNCQUFXLENBQUMsQ0FBQztBQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxxQkFBVSxDQUFDLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsd0JBQWEsQ0FBQyxDQUFDO0FBSXJDLGtCQUFlLE1BQU0sQ0FBQyJ9