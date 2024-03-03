# Reactコンテナのnpmパッケージをアップデート
.PHONY: npm-update-for-front
npm-update-for-front:
	docker-compose exec node sh -c 'cd react-blessing-card && npm update'

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
container-build:
	docker-compose build

# コンテナビルドして起動
.PHONY: container-up-build
container-up-build:
	docker-compose up -d --build