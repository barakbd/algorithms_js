"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generate_array(fn, source_data) {
    let output_array = [];
    return source_data.map(data => output_array.push(fn(data)));
}
exports.generate_array = generate_array;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyX2Z1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJfZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBZ0IsY0FBYyxDQUFDLEVBQVksRUFBRSxXQUFrQjtJQUM3RCxJQUFJLFlBQVksR0FBVSxFQUFFLENBQUM7SUFDN0IsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFIRCx3Q0FHQyJ9