# Mock System

## Enable mock

### ENV

FEATURE_MOCK=true

### Header

x-use-mock: true

## Usage

```ts
@Post('login')
@Mockable('auth.login')
login()
{
  return this.authService.login();
}
``` 