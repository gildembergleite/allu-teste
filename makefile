build:
	docker build -t allu-ecommerce-nextjs-ts-frontend .

run:
	docker run -d -p 3000:3000 --name allu-ecommerce-nextjs-ts-frontend allu-ecommerce-nextjs-ts-frontend

stop:
	docker stop allu-ecommerce-nextjs-ts-frontend

start:
	docker start allu-ecommerce-nextjs-ts-frontend

remove:
	docker rm -f allu-ecommerce-nextjs-ts-frontend