FROM openjdk:17-oracle
WORKDIR /app
COPY target/LoginPage-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8085
CMD ["java", "-jar", "app.jar"]