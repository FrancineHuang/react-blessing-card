# Reactコンテナのnpmパッケージをアップデート
.PHONY: npm-update-for-front
npm_update_for_front:
	docker-compose exec front npm update

# コンテナ起動
.PHONY: up
up:
	docker-compose up -d

# コンテナ停止
.PHONY: down
down:
	docker-compose down

# コンテナビルド
.PHONY: container-build
container_build:
	docker-compose build

# コンテナビルドして起動
.PHONY: container-up-build
container_up_build:
	docker-compose up -d --build

# フロント開発用サーバ起動
.PHONY: dev
dev:
	docker-compose exec npm run dev