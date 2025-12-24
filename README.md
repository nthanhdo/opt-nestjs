# NestJS Core-first Architecture (FE-first, Mockable)

## 🎯 Mục tiêu kiến trúc

Dự án này được thiết kế theo hướng **Core-first**, tập trung xây dựng nền tảng kỹ thuật vững chắc trước khi phát triển các domain modules.

Các mục tiêu chính:

* Chuẩn hóa **cross-cutting concerns** (logger, error, auth, swagger, config)
* Hỗ trợ **FE-first development** thông qua mock layer bật/tắt bằng ENV
* Dễ scale, dễ bảo trì, đúng tư duy TechLead / Senior
* Không trộn business logic vào core

---

## 🧱 Tổng quan kiến trúc

```
ENV (.env)
   ↓
Config Layer (config/*)
   ↓
Core System (core/*)
   ↓
Mock Layer (mock/*) [optional]
   ↓
Domain Modules (future)
```

---

## 📁 Cấu trúc thư mục chính

### `src/config/`

> Chỉ chứa logic **ENV → config object**

* Không inject service
* Không xử lý business
* Dùng với `@nestjs/config`

Ví dụ:

* `app.config.ts`: port, prefix, version
* `feature.config.ts`: mock, benchmark, logger flags

---

### `src/core/` – CORE SYSTEM

Chứa toàn bộ **cross-cutting concerns**, dùng global scope.

#### 1. `constants/`

Các hằng số dùng chung cho core:

* app metadata
* request headers
* context keys

#### 2. `context/`

Quản lý **request-scoped context**:

* requestId
* userId
* traceId

Dùng cho logger, tracing, audit.

#### 3. `decorators/`

Decorator dùng toàn hệ thống:

* `@Public()` – bypass auth
* `@Mockable()` – cho phép mock response

#### 4. `guards/`

Auth / permission ở mức core:

* JWT
* API key

#### 5. `interceptors/`

Cross-cutting interceptors:

* Logging
* Benchmark (performance)
* Transform response

Được đăng ký global tại `core.module.ts`

#### 6. `error/`

Chuẩn hóa error handling:

* ErrorCode enum
* BaseAppException
* GlobalExceptionFilter
* Unified error response

#### 7. `logger/`

Hệ thống logging:

* AppLogger (domain-agnostic)
* Transport (winston / pino)
* Dùng được cho Nest internal + business log

#### 8. `database/`

Database abstraction:

* Factory pattern
* Multiple drivers (mongo / postgres / mysql)
* Bật driver bằng ENV

#### 9. `cache/`

Cache abstraction tương tự database:

* redis / rabbit / memcached

#### 10. `swagger/`

Swagger setup tập trung:

* Setup 1 lần
* Dùng config từ ENV

---

### `src/mock/` – MOCK LAYER (FE-FIRST)

Cho phép phát triển frontend trước backend.

#### Thành phần:

* `faker/`: generate fake data
* `data/`: static mock data
* `registry/`: map route → mock handler
* `handler/`: xử lý mock tập trung

Mock có thể bật/tắt bằng ENV:

```
FEATURE_MOCK=true
```

---

### `src/shared/`

Chia sẻ nhẹ giữa các module:

* constants
* enums
* types

⚠️ Không chứa logic core

---

## 🚀 Vòng đời request

```
Request
  ↓
Middleware (context)
  ↓
Guard (auth)
  ↓
Interceptor (logging, benchmark)
  ↓
Mock Handler (nếu bật)
  ↓
Controller → Service
  ↓
Transform Interceptor
  ↓
Response
```

---

## 🔧 ENV mẫu

```env
NODE_ENV=development

APP_PORT=3500
APP_PREFIX=api
APP_VERSION=v1

FEATURE_MOCK=true
FEATURE_BENCHMARK=true

LOGGER_LEVEL=info
```

---

## 🧠 Nguyên tắc TechLead

* Core **không phụ thuộc domain**
* Config **không chứa logic**
* Mock **là chiến lược, không phải hack**
* Mọi thứ có thể bật/tắt bằng ENV

---

## 📌 Roadmap đề xuất

* [ ] Thêm domain module (user / product)
* [ ] Add RBAC guard
* [ ] Add request tracing (OpenTelemetry)
* [ ] Add health check module

---

## ✅ Kết luận

Kiến trúc này phù hợp cho:

* Team backend 3–10 người
* FE-first / mobile-first
* Project scale vừa đến lớn

> "Build the core right, features will follow."
