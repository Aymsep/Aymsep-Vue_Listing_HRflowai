import { computed } from "vue";

export function generateRandomColor() {
    let color = '';
    do {
      color = Math.floor(Math.random() * 16777215).toString(16);
      color = color.padStart(6, '0'); // Ensures the string has 6 characters
    } while (color === 'e2e8f0'); // Keep generating if it's the color to avoid
    return color;
  }



  export const extractTasks = computed((tasks) => {
    return tasks.map((task) =>task.name)
  });



  export const formatTime = (time) => {
    return new Date(time).toLocaleString();
  }