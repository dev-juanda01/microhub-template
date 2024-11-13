/**
 * Definition of environment variables used to privatize sensitive data in a
 * project. Ensures the reliability and security of information.
 */
class AppEnv {
    static NODE_MODE = process.env.NODE_ENV || 'development';
    static PORT = process.env.PORT || 3000;
    static HOST = process.env.HOST || '0.0.0.0';
}

export { AppEnv };