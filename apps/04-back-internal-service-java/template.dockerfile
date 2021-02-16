FROM maven:3.6.3-jdk-11 AS builder

WORKDIR /usr/src/app
COPY . ./
RUN mvn clean package




FROM openjdk:11-jre
COPY --from=builder /usr/src/app/target/{{name}}-{{version}}.jar /usr/app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/usr/app/app.jar"]