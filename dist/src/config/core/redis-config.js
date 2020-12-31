"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enabled = (process.env.REDIS_ENABLE || "false") == "true";
exports.default = !enabled
    ? {}
    : {
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: parseInt(process.env.REDIS_PORT || "6379"),
        db: parseInt(process.env.REDIS_DB || "0"),
        auth_pass: process.env.REDIS_AUTH,
    };
/*
  host?: string;
  port?: number;
  path?: string;
  url?: string;
  parser?: string;
  string_numbers?: boolean;
  return_buffers?: boolean;
  detect_buffers?: boolean;
  socket_keepalive?: boolean;
  socket_initial_delay?: number;
  no_ready_check?: boolean;
  enable_offline_queue?: boolean;
  retry_max_delay?: number;
  connect_timeout?: number;
  max_attempts?: number;
  retry_unfulfilled_commands?: boolean;
  auth_pass?: string;
  password?: string;
  db?: string | number;
  family?: string;
  disable_resubscribing?: boolean;
  rename_commands?: { [command: string]: string } | null;
  tls?: any;
  prefix?: string;
  retry_strategy?: RetryStrategy;
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXMtY29uZmlnLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29yZS9yZWRpcy1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE9BQU8sR0FBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUV6RSxrQkFBZSxDQUFDLE9BQU87SUFDbkIsQ0FBQyxDQUFDLEVBQUU7SUFDSixDQUFDLENBQUM7UUFDSSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksV0FBVztRQUMzQyxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUN6QyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO0tBQ3BDLENBQUM7QUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQkUifQ==