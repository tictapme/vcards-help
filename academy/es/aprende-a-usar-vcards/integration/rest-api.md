# REST API

The documentation of the api can be found in [Api Docs](https://vcards-admin.tictap.me/api/doc) page.
This article defines the resources available in the Vcards integration API.

## Access token

In order to access the API it is required having an accessToken. Once you have an accessToken you must include it in every request as a HTTP header

```AccessToken: "YOUR_API_KEY_HERE"```

If you need to try different API calls you can do it from the same Api Docs page, by using the "authorize" button

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/YEeAHVgv2weauofM-image-1727176713256.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/YEeAHVgv2weauofM-image-1727176713256.png)

## List vcards

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/wMeP3tqwwoBxerZk-image-1727176083040.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/wMeP3tqwwoBxerZk-image-1727176083040.png)

Retrieve a paginated list of vcards with optional filtering and search functionality.

### Parameters:
| Name      | Type    | Description                                                                | Required |
|-----------|---------|----------------------------------------------------------------------------|----------|
| query     | string  | Search a string in name, code, or SKU                                       | No       |
| filters[] | array   | Filter by field values, can include multiple in the format filters[field-slug]=value. Example: filters[email]=mymail | No       |
| page      | string  | Page number for pagination (default is `1`)                                 | No       |
| limit     | string  | Number of items per page (default is `25`)                                  | No       |

- **query**: A string to search in the tag’s name, code, or SKU.
- **filters[]**: An array for filtering by specific field values. Multiple filters can be passed in the format `filters[field-slug]=value`.
- **page**: A string representing the page number for pagination.
- **limit**: A string representing the number of items per page.

### Responses:
The response for this endpoint would contain a paginated list of tags with the applied filters and search criteria.



## Create a new vcard

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/ilaxYbbqlxS41Xax-image-1727175987281.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/ilaxYbbqlxS41Xax-image-1727175987281.png)

Creates a new vcard in the team.


### Parameters ( values )
| Name                | Type   | Description                                                 | Required |
|---------------------|--------|-------------------------------------------------------------|----------|
| name                | string | Full name  ( contains name and last name )                  | Yes      |
| collection          | string | Brand id ( this value uniquely identifies a vcard brand )   | Yes      |
| position            | object | Job Position as a localized value. Uses the locale as a key | No       |
| email               | string | Email related to the vcard                                  | Yes      |
| telephone           | string | Phone number                                                | No       |
| mobile-phone        | string | Mobile phone number                                         | No       |
| address             | string | Address of the vcard                                        | No       |
| address-second-line | string | When the address is too long                                | No       |
| department          | string | Company department                                          | No       |
| postal-code         | string | Postal code / zip code                                      | No       |
| city                | string | City                                                        | No       |


- **sku**: A string representing the SKU (Stock Keeping Unit) used to identify the vcard to be updated.
- **{ [field-slug]: string }**: A JSON object containing the vcard details. Each of the keys belongs to the slug of the field in the vcard.

### Request Body:
- **Media type**: `application/json`
- **Example request body**:
    ```json
    {
      "name": "John Doe",
      "collection": "{brand_id}",
      "values": {
        "position": {
          "en": "General Manager",
          "es": "Director General"
        },
        "email": "john.doe@domain.com",
        "telephone": "+1234567890",
        "mobile-phone": "+1234567890",
        "address": "1234 Main Street",
        "address-second-line": "Suite 123",
        "department": "Marketing",
        "postal-code": "08080",
        "city": "Barcelona"
      }
    }
    ```

### Responses:

#### 201 - Success
- **Media type**: `application/json`
- **Example response**:
    ```json
    {
        "code": "BVHWSTMGL",
        "sku": "ABC000",
        "values": {
          "name": "Full name",
          "email": "john.doe@domain.com",
          "telephone": "+1234567890",
          "position": { 
            "en":  "CEO", 
            "es": "Director General" 
          },
          "mobile-phone": "+1234567890",
          "address": "1234 Main St, City, Country",
          "department" : "Marketing"
        }
    }

## Show vcard detail

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/QgYJPMvioFsJj4hB-image-1727176254390.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/QgYJPMvioFsJj4hB-image-1727176254390.png)

Retrieves vcard details by the given SKU. The SKU is a unique reference for the vcard.

### Parameters:
| Name | Type   | Description | Required |
|------|--------|-------------|----------|
| sku  | string | SKU code    | Yes      |

- **sku**: A string representing the SKU (Stock Keeping Unit) used to retrieve specific vcard details.

### Responses:

#### 200 - Success
- **Media type**: `application/json`
- **Example response**:
    ```json
    {
        "code": "BVHWSTMGL",
        "sku": "ABC000",
        "values": {
          "name": "Full name",
          "email": "john.doe@domain.com",
          "telephone": "+1234567890",
          "position": { 
            "en":  "CEO", 
            "es": "Director General" 
          },
          "mobile-phone": "+1234567890",
          "address": "1234 Main St, City, Country",
          "department" : "Marketing"
        }
    }
    ```

#### 404 - Not Found
- **Description**: Vcard not found in the team for the given SKU.

## Edit a vcard

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/iJYfU1CoPjyWZlBy-image-1727176197733.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/iJYfU1CoPjyWZlBy-image-1727176197733.png)

Updates the details of an existing vcard identified by the SKU.

<strong>Attention:</strong> When a value is NOT included in the request body, that value will be ERASED!! Every PUT request must include all the fields that you want to keep.

### Parameters:
| Name | Type   | Description | Required |
|------|--------|-------------|----------|
| sku  | string | SKU code    | Yes      |

- **sku**: A string representing the SKU (Stock Keeping Unit) used to identify the vcard to be updated.

### Request Body:
- **Media type**: `application/json`
- **Example request body**:
    ```json
     {
      "code": "BVHWSTMGL",
      "sku": "ABC000",
      "values": {
        "name": "Full name",
        "email": "john.doe@domain.com",
        "telephone": "+1234567890",
        "position": { 
          "en":  "CEO", 
          "es": "Director General" 
        },
        "mobile-phone": "+1234567890",
        "address": "1234 Main St, City, Country",
        "department" : "Marketing"

      }
  }
    ```

### Responses:

#### 200 - Success
- **Media type**: `application/json`
- **Example response**:
    ```json
    {
        "code": "BVHWSTMGL",
        "sku": "ABC000",
        "values": {
          "name": "Full name",
          "email": "john.doe@domain.com",
          "telephone": "+1234567890",
          "position": { 
            "en":  "CEO", 
            "es": "Director General" 
          },
          "mobile-phone": "+1234567890",
          "address": "1234 Main St, City, Country",
          "department" : "Marketing"
        }
    }
    ```

- **Description**: Successful update of the vcard.

## Delete a vcard

[![](https://help.tictapcards.com/uploads/images/gallery/2024-09/scaled-1680-/H7L5bIuFQEoabZ5t-image-1727175952263.png)](https://help.tictapcards.com/uploads/images/gallery/2024-09/H7L5bIuFQEoabZ5t-image-1727175952263.png)

Deletes a vcard from the team by the given SKU.

### Parameters:

| Name | Type   | Description | Required |
|------|--------|-------------|----------|
| sku  | string | SKU code    | Yes      |

- **sku**: A string representing the SKU (Stock Keeping Unit) used to delete the vcard.

### Responses:

#### 204 - Success
- **Description**: Vcard successfully deleted from the team.
- **Media type**: `application/json`
