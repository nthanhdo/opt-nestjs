
```
src/
└── core/
    ├── core.module.ts
    ├── index.ts                     # export CoreModule + các core entities
    │
    ├── config/
    │   ├── env.config.ts
    │   ├── global.config.ts
    │   ├── app.config.ts
    │   ├── security.config.ts
    │   ├── features.config.ts
    │   ├── version.config.ts
    │   │
    │   ├── database/
    │   │   ├── postgres.config.ts
    │   │   ├── mongodb.config.ts
    │   │   ├── prisma.config.ts
    │   │   └── typeorm.config.ts
    │   │
    │   ├── cache/
    │   │   ├── redis.config.ts
    │   │   ├── memcached.config.ts
    │   │   ├── rabbitmq.config.ts
    │   │   └── kafka.config.ts
    │   │
    │   ├── mailer/
    │   │   └── mailer.config.ts
    │   │
    │   └── excel/
    │       └── excel.config.ts
    │
    ├── context/
    │   ├── global-context.ts         # singleton app-wide config/context
    │   └── request-context.ts        # request-scoped info
    │
    ├── decorators/
    │   ├── mock.decorator.ts
    │   ├── version.decorator.ts
    │   ├── public.decorator.ts
    │   └── roles.decorator.ts
    │
    ├── interceptors/
    │   ├── mock.interceptor.ts
    │   ├── benchmark.interceptor.ts
    │   ├── version.interceptor.ts
    │   ├── transform.interceptor.ts
    │   ├── timeout.interceptor.ts
    │   └── excel.interceptor.ts
    │
    ├── middlewares/
    │   ├── index.ts                  # re-export tất cả middleware
    │   ├── logger.middleware.ts
    │   └── request-context.middleware.ts
    │
    ├── filters/
    │   ├── index.ts                  # re-export tất cả filters
    │   ├── http-exception.filter.ts
    │   └── validation-exception.filter.ts
    │
    ├── guards/
    │   ├── index.ts                  # re-export tất cả guards
    │   ├── auth.guard.ts
    │   └── roles.guard.ts
    │
    ├── transformers/
    │   └── excel.transformer.ts
    │
    ├── validators/
    │   ├── custom-validation.ts
    │   └── excel-validator.ts
    │
    ├── utils/
    │   ├── date.util.ts
    │   ├── string.util.ts
    │   ├── hash.util.ts
    │   └── pagination.util.ts
    │
    ├── constants/
    │   ├── app.constant.ts
    │   ├── version.constant.ts
    │   └── features.constant.ts
    │
    └── types/
        ├── context.type.ts
        ├── version.type.ts
        └── response.type.ts
```