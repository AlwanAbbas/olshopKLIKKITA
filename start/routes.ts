import router from '@adonisjs/core/services/router'
import CartController from '#controllers/cart_controller'
import CheckoutController from '#controllers/checkout_controller' // ✅ Tambahan ini

// Import controllers
const HomeController = () => import('#controllers/home_controller')
const AuthController = () => import('#controllers/auth_controller')
const AdminProductsController = () => import('#controllers/admin/products_controller')
// import AuthMiddleware from '#middleware/auth_middleware'

// ===================
// Public Routes
// ===================

router.get('/', [HomeController, 'index'])

router.get('/login', [AuthController, 'showLogin'])
router.post('/login', [AuthController, 'login'])

router.get('/register', [AuthController, 'showRegister'])
router.post('/register', [AuthController, 'storeRegister'])

// ===================
// Admin Routes
// ===================

// Admin routes (dilindungi)
router.group(() => {
  router.get('/admin/products', [AdminProductsController, 'index'])
  router.get('/admin/products/create', [AdminProductsController, 'create'])
  router.post('/admin/products', [AdminProductsController, 'store'])
  router.get('/admin/products/:id/edit', [AdminProductsController, 'edit'])
  router.put('/admin/products/:id', [AdminProductsController, 'update'])
  router.delete('/admin/products/:id', [AdminProductsController, 'destroy'])
})
// .middleware(['auth.user']) // pakai nama string sesuai yang didefinisikan di kernel

router.get('/contact', [() => import('#controllers/contacts_controller'), 'showForm'])
router.post('/contact', [() => import('#controllers/contacts_controller'), 'submitForm'])

router.get('/about', [() => import('#controllers/about_controller'), 'index'])

// ===================
// Account Routes
// ===================

router
  .group(() => {
    router.get('/', [() => import('#controllers/account_controller'), 'profile'])
    router.get('/profile', [() => import('#controllers/account_controller'), 'profile'])
  })
  .prefix('/account')

// ===================
// Cart Routes
// ===================

router.get('/cart', async (ctx) => {
  const controller = new CartController()
  return controller.index(ctx)
})

router.post('/cart/update', async (ctx) => {
  const controller = new CartController()
  return controller.update(ctx)
})

// ===================
// Checkout Routes
// ===================

router.get('/checkout', async (ctx) => {
  const controller = new CheckoutController()
  return controller.show(ctx)
})

router.post('/checkout', async (ctx) => {
  const controller = new CheckoutController()
  return controller.store(ctx)
})
