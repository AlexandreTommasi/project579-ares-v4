/**
 * Módulo para centralizar as variáveis de ambiente e configurações da aplicação.
 */

export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  appName: import.meta.env.VITE_APP_NAME || 'Guessing Game',
};
