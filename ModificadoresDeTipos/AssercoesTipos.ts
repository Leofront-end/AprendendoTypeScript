const rawData = `["grace","frankie"]`

JSON.parse(rawData);

JSON.parse(rawData) as string[];

JSON.parse(rawData) as [string, string];

JSON.parse(rawData) as ["grace", "frankie"];